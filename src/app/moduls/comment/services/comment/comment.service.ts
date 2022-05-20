import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {CommentModel} from '../../models';
import {urls} from "../../../../constants";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {
  }

  getComments(): Observable<CommentModel[]> {
    return this.http.get<CommentModel[]>(urls.comments);
  }

}
