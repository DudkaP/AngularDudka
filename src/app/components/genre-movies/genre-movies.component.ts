import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IGenre, IMovieResults} from "../../interfaces";
import {MovieService} from "../../services";

@Component({
  selector: 'app-genre-movies',
  templateUrl: './genre-movies.component.html',
  styleUrls: ['./genre-movies.component.css']
})
export class GenreMoviesComponent implements OnInit {

  genre: IGenre;
  allMovies: IMovieResults[];
  genreMovies: IMovieResults[] = [];

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) {
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(value => {
      let {state: {data}} = history;
      this.genre = data;

      let pageNums : number = 1;

        this.movieService.getMoviePages(pageNums.toString()).subscribe(value => {
          this.allMovies = value.results;

          this.genreMovies = this.allMovies.filter(g => {
            return g.genre_ids.includes(this.genre.id);
          });



          console.log(this.genreMovies.length);
        })
    })


  }

}
