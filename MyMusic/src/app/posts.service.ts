import { Injectable } from "@angular/core";
import { DialogData} from './models/dialog-data'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog } from "@angular/material/dialog";
import { Song } from "./models/song";

@Injectable({
    providedIn: 'root'
})
export class PostService {

    constructor(private httpClient: HttpClient){
    }
    
    getPosts(){
        return this.httpClient.get('https://localhost:44393/api/Demo/GetAllSongs');
    }

    deleteSongs(id:number){
        this.httpClient.delete('https://localhost:44393/api/Demo/DeleteSong/'+id).subscribe(data=>{alert ("Song with id "+id+" : Successfully removed!"); });
    }

    
}