import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services";
import {IMovie} from "../../interfaces";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movie: IMovie[];


  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getMovie().subscribe(value => {
      this.movie = value;
      console.log(value);
    })

  }

}
