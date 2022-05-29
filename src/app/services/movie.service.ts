import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {urls} from "../constants";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient:HttpClient) {

  }

  getMovie(): Observable<any[]> {
    return this.httpClient.get<any[]>(urls.movie)
  }

}
