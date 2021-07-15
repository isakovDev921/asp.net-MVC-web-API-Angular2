import { Injectable, OpaqueToken, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { User } from "./model";


@Injectable()
export class RestDataSource {
    user: User = new User();
    private _ulr: string = "http://localhost:61374";

    constructor(private _http: Http) {}

    //getData(): Observable<string> {
    //    return this._http.get(`${this._ulr}/Home/GetTestString`)
    //        .map(response => response.json());
    //}

    saveUser(user: User): Observable<User> {
        return this._http.post(`${this._ulr}/Home/CreateUser`, user)
            .map(response => response.json());
    }

    getUsers(): Observable<any>  {
        return this._http.get(`${this._ulr}/Home/GetUsers`)
            .map(response => response.json());
    }

    deleteUser(Id: number){
        this.user.Id = Id;
        return this._http.post(`${this._ulr}/Home/DeleteUser`, this.user)
            .map(response => response.json());
    }


}
