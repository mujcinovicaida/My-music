import { Injectable } from "@angular/core";
import { DialogData} from './models/dialog-data'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog } from "@angular/material/dialog";
import { Song } from "./models/song";

@Injectable({
    providedIn: 'root'
})
export class AddService {

    constructor(private httpClient: HttpClient){}
    
    
    saveSongs(song:Song){
        console.log(song);
        this.httpClient.post<any>('https://localhost:44393/api/Demo/SaveSong',song);
            
    }
}