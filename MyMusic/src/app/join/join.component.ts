import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms'; 
import { LoginService } from '../login.service';
import { Register } from '../models/register';
@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  register:Register;
  constructor(private loginService:LoginService) { } 

  ngOnInit(){
    // userForm:new Register();
    // this.UseForm=this.formbuilder.group({
    //   Email: ['', [Validators.required]],
    //   Password: ['', [Validators.required]],
    // });

  }

  // onFormSubmit()    
  // {    
  //   const user = this.UseForm.value;    
  //   this.CreateUser(user);    
  // }    
  // CreateUser(register:Register)    
  // {    
  // this.loginService.saveUser(register).subscribe(    
  //   ()=>    
  //   {    
  //     this.data = true;    
  //     this.message = 'Data saved Successfully';    
  //     this.UseForm.reset();    
  //   });    
  // }    
}