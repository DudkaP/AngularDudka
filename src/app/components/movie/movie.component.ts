import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from "../../interfaces";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input()
  movieDetails:IMovie;

  constructor() {
  }

  ngOnInit(): void {
    // console.log(this.movieDetails);
  }

}
