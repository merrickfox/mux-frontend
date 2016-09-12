import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../services/posts/posts.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  providers: [PostsService]
})
export class PostListComponent implements OnInit {
  posts;
  showLoader: boolean;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    console.log('nginit')
    this.showLoader = true;
    this.postsService.getPosts().subscribe(
      posts => {
        this.posts = posts;
        this.showLoader = false;
      },
      error =>  console.log(error));
  }

}
