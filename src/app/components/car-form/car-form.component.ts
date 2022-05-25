import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CarService} from "../../services";
import {ICar} from "../../interfaces";

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  carForm: FormGroup;

  constructor(private carService: CarService) {
    this._createCarForm()
  }

  ngOnInit(): void {
  }

  _createCarForm(): void {
    this.carForm = new FormGroup({
      model: new FormControl(null),
      price: new FormControl(null),
      year: new FormControl(null)
    })
  }

  Save(): void {
    this.carService.create(this.carForm.getRawValue());
    this.carService.getAll().subscribe(value => console.log(value))
  }
}
