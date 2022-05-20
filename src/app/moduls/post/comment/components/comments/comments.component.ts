import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {CommentModel} from "../../models";
import {CommentService} from "../../services";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class PostCommentsComponent implements OnInit {

  comments: CommentModel[];

  constructor(private commentService: CommentService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.commentService.getCommentsById(id).subscribe(value => this.comments = value);
    })

  }

}
