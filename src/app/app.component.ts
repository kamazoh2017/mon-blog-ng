import { Component } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'mon-blog';
  
  
  posts = [
  new Post("Premier post", "Some quick example text to build on the card title and make up the bulk of the card's content.", 1),
  new Post("Deuxieme post", "Some quick example text to build on the card title and make up the bulk of the card's content.", 5),
  new Post("Troisieme post", "Some quick example text to build on the card title and make up the bulk of the card's content.", 0),
  new Post("Quatrieme post", "Some quick example text to build on the card title and make up the bulk of the card's content.", 3),
  new Post("Dernier post", "Some quick example text to build on the card title and make up the bulk of the card's content.", 0)
  ];

  // posts = [
  //   {
  //     title: "Premier post",
  //     content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  //     loveIts: 0,
  //     created_at: new Date()
  //   },
  //   {
  //     title: "Deuxieme post",
  //     content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  //     loveIts: 10,
  //     created_at: new Date()
  //   },
  //   {
  //     title: "Troisieme post",
  //     content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  //     loveIts: 1,
  //     created_at: new Date()
  //   },
  //   {
  //     title: "Dernier post",
  //     content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  //     loveIts: 5,
  //     created_at: new Date()
  //   }
  // ];

}

