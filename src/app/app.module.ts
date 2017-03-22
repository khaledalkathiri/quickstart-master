import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms' ;
import {HttpModule} from '@angular/http' ;

import { AppComponent }  from './app.component';
import { RegisterComponent} from './register/register.component'
import { loginComponent }  from './login/login.component'
import { HomeComponent } from './home/home.component' ;

import {  AuthService } from './services/Auth.service'
import {  AuthGuard} from './services/Auth.Guard'
import { UserService} from './services/User.service' ;
import {DisplyEstablishmentComponent} from './login/displyEstablishment.component';


import { rouing } from './app.routing' ;

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule,rouing ],
  declarations: [ AppComponent, loginComponent,HomeComponent, RegisterComponent, DisplyEstablishmentComponent ],
  providers : [AuthGuard, AuthService, UserService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }