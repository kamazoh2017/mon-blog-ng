import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  //appareilName: string = 'Machine à laver';
  @Input() postTitle: string;
  @Input() postDate: string;
  @Input() postContent: string;
  @Input() postLoveStatus: number;
  constructor() { }

  ngOnInit() {
  }

  onLove(){
    this.postLoveStatus ++;
  }

  onUnlike(){
    this.postLoveStatus --;
  }

}

