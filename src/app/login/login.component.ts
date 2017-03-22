import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router' ;

import {  AuthService } from '../services/Auth.service'

import {AuthGuard }  from '../services/Auth.Guard' ;
import { User} from '../models/User' ;

@Component({
  moduleId : module.id ,
  selector: 'login',
  templateUrl :'./login.component.html',
  providers :[AuthService,AuthGuard, User]
})


export class loginComponent implements OnInit  { 
    
loading = false ;
returnUrl : string ;
model : any = {} ;
showError = false ;
errorMsg : string ;

constructor(private router : Router,private auth : AuthService,private authGaurd : AuthGuard){}


ngOnInit(){
  this.auth.logout();
}

//**********Define ur method onSubmit Form ***************// 


login(){
  this.loading = true ;

  this.auth.login(this.model.username, this.model.password)
  .subscribe( data => this.router.navigate(['/home']),
  error => this.displayError(error))

}


private displayError(error : string){
  this.showError = true;
  this.loading = false ;
  this.errorMsg = error ;
}

 }