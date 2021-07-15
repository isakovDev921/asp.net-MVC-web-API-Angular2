import { Component, OnInit, Input} from '@angular/core';
import { Http, Response } from '@angular/http';
import { RestDataSource } from "./app.service";
import { User } from "./model";
import {FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'my-app',
    templateUrl: '../Scripts/App/app.component.html',
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `]

})

export class AppComponent implements OnInit {
 
    user: User = new User();
    users: any[] = [];

     receivedUser: User | undefined;
     done: boolean = false;
     myForm: FormGroup;
     
    constructor(
        private _dataSource: RestDataSource,
        private _http: Http,
        private _fb: FormBuilder
    ) {}

    ngOnInit() {
        this.initForm();
    }

    initForm(): void {
        this.myForm = this._fb.group({
            "firstName": ['', Validators.required],
            "lastName": ['', Validators.required],
            "age": ['', [Validators.required, Validators.pattern("^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$")]],
            "email": ['', [Validators.pattern("^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$")]],
            "phone": ['', [Validators.pattern("[- +()0-9]+")]]
        });
    }

    submit(user: User) {
        this._dataSource.saveUser(user)
            .subscribe(
                (data: any) => {
                    this.receivedUser = data;
                    this.done = true;

                    this.myForm = this._fb.group({
                        "firstName": [''],
                        "lastName": [''],
                        "age": [''],
                        "email": [''],
                        "phone": ['']
                    });
                },
                error => console.log(error)
        );
    }

    refreshTable() {
        this._dataSource.getUsers()
            .subscribe(
                (data: any) => {
                    this.users = JSON.parse(data);
                    this.done = true;
                },
                error => console.log(error)
            );
    }

    deleteUser(id) {
        this._dataSource.deleteUser(id)
                .subscribe(
                (data: any) => {
                        this.done = true;
                    this.refreshTable();
                },
                error => console.log(error));
    }

    


}