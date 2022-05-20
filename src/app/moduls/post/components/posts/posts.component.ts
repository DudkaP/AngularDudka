import {Component, OnInit} from '@angular/core';

import {PostService} from "../../services";
import {PostModel} from "../../models";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: PostModel[];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(value => this.posts = value);
  }

}
