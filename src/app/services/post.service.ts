import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {PostModel} from "../models/post.model";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private outUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<PostModel[]> {
    return this.http
      .get<PostModel[]>(this.outUrl)
  }

}
