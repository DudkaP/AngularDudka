import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: any[];

  constructor(private movieService:MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getMovie().subscribe(value => this.movie = value)
  }

}
