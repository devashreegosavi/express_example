import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) { }
    /*getMessage() {
        return this.http.get(
            'http://localhost:3000/api/message');
    }*/

    getUserdetail(){
        return this.http.get(
            'http://localhost:3000/users');

            /*return this.http.get('http://localhost:3000/users')
                    .toPromise()
                    .then(res => res as Product[]);*/
    }

    getAll() :Observable<User[]>{
        return this.http.get<User[]>(
            'http://localhost:3000/users');

    }
}