import { Component, OnInit } from '@angular/core';
import {IMovieResults} from "../../interfaces";
import {urls} from "../../constants";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  movieInfo: IMovieResults;
  poster500: string = urls.getPoster500;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      let {state:{data}} = history;
      this.movieInfo = data;
    })
  }

}
