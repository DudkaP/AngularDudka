import {Component, Input, OnInit} from '@angular/core';
import {IMovieResults} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";
import {urls} from "../../constants";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  movieCard:IMovieResults;
  poster500:string = urls.getPoster500;


  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      let {state:{data}} = history;
      console.log(data);
      this.movieCard = data;

    })
  }

}
