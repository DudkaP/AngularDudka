import { Component, OnInit } from '@angular/core';
import {GenresService} from "../../services";
import {IGenre} from "../../interfaces/genre";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  genres:IGenre[];

  constructor(private genresService:GenresService) { }

  ngOnInit(): void {
    this.genresService.getGenres().subscribe(value => {
      this.genres = value
      console.log(this.genres);
    })
  }

}