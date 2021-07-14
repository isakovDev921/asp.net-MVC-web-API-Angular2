"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
const app_service_1 = require("./app.service");
const model_1 = require("./model");
const forms_1 = require("@angular/forms");
let AppComponent = class AppComponent {
    constructor(_dataSource, _http, _fb) {
        this._dataSource = _dataSource;
        this._http = _http;
        this._fb = _fb;
        this.user = new model_1.User();
        this.users = [
            {
                "FirstName": "Douglas  Pace"
            }
        ];
        this.done = false;
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.myForm = this._fb.group({
            "firstName": ['', forms_1.Validators.required],
            "lastName": ['', forms_1.Validators.required],
            "age": ['', [forms_1.Validators.required, forms_1.Validators.pattern("^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$")]],
            "email": ['', [forms_1.Validators.pattern("^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$")]],
            "phone": ['', [forms_1.Validators.pattern("[- +()0-9]+")]]
        });
    }
    submit(user) {
        this._dataSource.saveUser(user)
            .subscribe((data) => {
            this.receivedUser = data;
            this.done = true;
        }, error => console.log(error));
    }
    refreshTable() {
        this._dataSource.getUsers()
            .subscribe((data) => {
            this.users = JSON.parse(data);
            this.done = true;
        }, error => console.log(error));
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: '../Scripts/App/app.component.html',
        styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `]
    }),
    __metadata("design:paramtypes", [app_service_1.RestDataSource,
        http_1.Http,
        forms_1.FormBuilder])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map