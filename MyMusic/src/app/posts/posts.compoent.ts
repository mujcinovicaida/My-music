import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { PostService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
    constructor(private postService: PostService,
      public dialog:MatDialog){}
    posts:any;
    
    ngOnInit(): void{
      this.postService.getPosts().subscribe(data =>{
        this.posts=data;
      })
    }
    
    readMore(id: number): void{ 
        let post = this.posts.find((x:any) =>x.id == id);
        this.dialog.open(ModalComponent, {
          width:'550px',
          data: {
            title:post.title,
            body:post.body
          }
        });
    }
  }