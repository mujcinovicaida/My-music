import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogData } from 'My-music/MyMusic/src/app/models/dialog-data';
import { ModalComponent } from '../modal/modal.component';
import { AddService } from '../add.service';
import {Song} from '../models/song';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent{
    //song:Song=new Song();
    song=<Song>{};
    constructor(private addService: AddService,
        public dialog:MatDialog){   
        }
      //posts:any;
      //SongName:string;
      // ngOnInit(): void{
      // }
      test():void{
       
      //  console.log(this.song);
       this.addService.saveSongs(this.song);
      }
}