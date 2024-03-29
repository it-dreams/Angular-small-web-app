import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  title = "Latest Post Blog";
  posts=[];
  constructor() { 
    // fetch()
    // .then()
    // .then()
    // .catch()

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => this.posts = data)
    .catch((err) => console.log(err)) 
  }

  ngOnInit() {
  }

}
