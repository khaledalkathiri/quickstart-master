import { Injectable} from '@angular/core' ;
import {Http, Response ,Headers,RequestOptions} from '@angular/http' ;
import { Router, CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router' ;
import { Observable} from 'rxjs/Observable' ;
import 'rxjs/add/operator/map' ;
import 'rxjs/add/operator/catch';

import { User} from '../models/User' ;


@Injectable()
export class AuthService {

//***************Inject the services into the constructor*****//

constructor(private http : Http, private router : Router){}


//************method login*************//

login(username : string, password: string) :Observable<string>{
    return this.http.post('/api/login', JSON.stringify({username : username,password:password}))
    .map(this.extractData)
    .catch(this.handleError)
   
}



//**************register Method *****************************//


register(user : User): Observable<string>{

 return this.http.post('/api/register', JSON.stringify({user: user}))
    .map(this.extractData)
    .catch(this.handleError)

}


//**************logout Method *****************************//

logout(){
    //only remove user from localStorage
    localStorage.removeItem('currentUser');
}




//*******************get the currentUser*******************//

currentUser(){
    let user = localStorage.getItem('currentUser');
    return user ;
}


//*********************************************************//

isloggedIn()
{
     if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
}else{
    return false ;
}
}



////**************extractData**************//
private extractData(res: Response){
    let body = res.json();
    console.log('the body is',body);
    //save it in localStorage
    localStorage.setItem('token', body.token);
    localStorage.setItem('currentUser', body.user);
    return body|| {} ;
}


private handleError(error:Response | any){
    let errMsg : string ;
    console.log('the error is', error);
    if(error instanceof Response)
    {
                //console.log('we are here !', JSON.stringify(error.body))
                //var err = JSON.stringify(error.body)
        const body = error.json() || '';
        console.log('body', body);
        const err = body.error() || JSON.stringify(body);

        errMsg = `${error.status} - ${error.statusText || ''} ${err}`

        console.log('the rrMsg is', errMsg);


    }else{
       
        errMsg = error.message ? error.message : error.toString();
    }

    console.log('err Msg',errMsg);
    return  Observable 
    .throw (errMsg) ;
}

}