import { Injectable} from '@angular/core' ;
import { Http} from '@angular/http' ;
import { Router, CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router' ;
import {  AuthService } from '../services/Auth.service'  ;


@Injectable()
export class AuthGuard implements CanActivate {

//***************Inject the services into the constructor*****//

constructor(private auth : AuthService , private router : Router){}





canActivate(){

    if(this.auth.isloggedIn()==false){
        this.router.navigate(['/login']);
    }
    return this.auth.isloggedIn() ;
}








}