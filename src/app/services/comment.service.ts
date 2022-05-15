import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {CommentModel} from "../models/comment.model";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private commentUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
  }

  getComments(id: string): Observable<CommentModel[]> {
    return this.http.get<CommentModel[]>(this.commentUrl + '/' + id + '/comments');
  }

}
