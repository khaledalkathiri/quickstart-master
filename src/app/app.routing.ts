import { Routes , RouterModule} from '@angular/router' ;
import { RegisterComponent} from './register/register.component'
import { loginComponent }  from './login/login.component'
import { HomeComponent } from './home/home.component' ;

import {DisplyEstablishmentComponent} from './login/displyEstablishment.component';


//**************import the service for the protected routes****//

import {  AuthService } from './services/Auth.service'
import {  AuthGuard} from './services/Auth.Guard'

 const routes : Routes = [
     {path :'login', component : loginComponent, 
        children:[
            {path:'contributedId',component: DisplyEstablishmentComponent}
     ]},
     {path :'register', component : RegisterComponent},
     {path :'home', component :HomeComponent, canActivate : [AuthGuard]},
     {path :'**', redirectTo :'login'}
]


export const rouing = RouterModule.forRoot(routes);