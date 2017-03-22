import { Component } from '@angular/core';
import { Router } from '@angular/router';


import {  AuthService } from '../services/Auth.service'
import {AuthGuard }  from '../services/Auth.Guard' ;

import { UserService} from '../services/User.service' ;

@Component({
    moduleId : module.id ,
  selector: 'register',
  templateUrl :'./register.component.html',
})
export class RegisterComponent  { 
    


 model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
) { }


register(){
  this.loading = true ;

  this.userService.Create(this.model)
  .subscribe(data=>{
 this.router.navigate(['/home']);
  }, error=>{
  //display error message 
  this.loading = false ;
  })
}


//**********Define ur method onSubmit Form ***************// 


 }