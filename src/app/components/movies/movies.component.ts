import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services";
import {IMovieResults} from "../../interfaces";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: IMovieResults[];


  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getMovie().subscribe(value => {
        this.movies = value.results
        console.log(this.movies);
      }
    )

  }

}