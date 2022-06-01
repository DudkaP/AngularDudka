import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IGenre} from "../interfaces/genre";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private httpClient:HttpClient) { }

  getGenres():Observable<IGenre[]> {
    return this.httpClient.get<IGenre[]>(urls.genres)
  }
}
