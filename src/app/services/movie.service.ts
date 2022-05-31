import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {urls} from "../constants";
import {HttpClient} from "@angular/common/http";
import {IMovie} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient:HttpClient) {

  }

  getMovie(): Observable<IMovie[]> {
    return this.httpClient.get<IMovie[]>(urls.movie)
  }

}
