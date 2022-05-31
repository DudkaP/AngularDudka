import {Component, Input, OnInit} from '@angular/core';
import {IMovieResults} from "../../interfaces";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input()
  movie:IMovieResults;

  constructor() {
  }

  ngOnInit(): void {
  }

}
