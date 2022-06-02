import {Component, OnInit} from '@angular/core';
import {IMovieResults} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";
import {urls} from "../../constants";
import {Location} from '@angular/common';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  movieCard:IMovieResults;
  poster500:string = urls.getPoster500;


  constructor(private activatedRoute:ActivatedRoute, private location:Location) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      let {state:{data}} = history;
      console.log(history);
      this.movieCard = data;

    })
  }

  back() {
    this.location.back()
  }
}
