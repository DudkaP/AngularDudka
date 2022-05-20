import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {PostModel} from "../../models";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetails: PostModel

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
        let {state: {data}} = history;
        this.postDetails = data;
      }
    );
  }

}
