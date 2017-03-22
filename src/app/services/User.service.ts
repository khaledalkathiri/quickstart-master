import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

//***************import our model***************************//

import { User } from '../models/User' ;


@Injectable()
export class UserService {


constructor(private http : Http){}

//*******************define our methods CRUD APPLICATIONS********************//

//private helpers method for protected api calls

private jwt(){
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser && currentUser.token){
        let headers = new Headers({'Authorization':'Bearer'+ currentUser.token});
        return new RequestOptions({headers:headers});
    }
}



getAll(){
    return this.http.get('/api/users', this.jwt()).map((response: Response)=> response.json());
}


getById(id : number){
    return this.http.get('/api/users/'+ id, this.jwt()).map((response: Response)=> response.json());
}

Create(user : User){
    return this.http.post('/api/users/'+ user, this.jwt()).map((response: Response)=> response.json());
}


update(user : User){
    return this.http.put('/api/users/'+ user.id, user, this.jwt()).map((response: Response)=> response.json());
}



DeleteById(id : number){
    return this.http.delete('/api/users/'+ id, this.jwt()).map((response: Response)=> response.json());
}

}