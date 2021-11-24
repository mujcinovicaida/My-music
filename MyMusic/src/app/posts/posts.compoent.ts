import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { PostService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit
 {
    constructor(private postService: PostService,
      public dialog:MatDialog){}
    posts:any;
   
    ngOnInit(): void{
      this.postService.getPosts().subscribe(data =>{
        this.posts=data;
      })
    }
    
    readMore(songID: number): void{ 
        let post = this.posts.find((x:any) =>x.songID == songID);
        this.dialog.open(ModalComponent, {
          width:'550px',
          data: {
            SongName:post.songName,
            SongUrl:post.songUrl,
            ArtistName:post.artistName,
            SongRating:post.songRating,
            Favourite:post.favourite,
            DateEdited:post.dateEdited,
            DateEntered:post.dateEntered,
            CategoryID:post.categoryID
          }
        });
    }
    deleteSong(songID: number){
      let songArray =Array.from(this.posts);
      let index= songArray.indexOf(songArray.find((x:any)=>x.songID==songID));
      //this.posts.find((x:any) =>x.songID == songID);
      this.postService.deleteSongs(songID);
      this.posts.splice(index,1);
    }
  }