import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Register } from "./models/register";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private httpClient: HttpClient){
    }
    
    saveUser(register:Register)
    {
        const httpOptions = {headers: new HttpHeaders({'Content-Type':'aplication/json'}) };
        return this.httpClient.post<Register[]>('https://localhost:44393/api/User/SaveUser' + '/createcontact/', register, httpOptions);
    }
    
}