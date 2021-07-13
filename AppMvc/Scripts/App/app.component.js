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
        //this.myForm.valueChanges
        //    .subscribe((formValue) => {
        //        console.log(formValue);
        //    });
        this._dataSource = _dataSource;
        this._http = _http;
        this._fb = _fb;
        //temp: string;
        //totalAngularPackages;
        //private products: Product[] = new Array<Product>();
        this.test = "null";
        //carName = '';
        //carYear = 2017;
        //@Input() carItem: { name: string, year: number };
        //cars:[{name: string, year: number}] = [
        //    {
        //        name: 'Ford',
        //        year: 2015
        //    }];
        this.user = new model_1.User();
        this.done = false;
        //this.myForm = new FormGroup({
        //    "firstName": new FormControl("{ value: 'test' }")
        //"userEmail": new FormControl("", [
        //    Validators.required,
        //    Validators.email
        //]),
        //"userPhone": new FormControl()
        //});
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
    getProducts() {
        var data1 = this._dataSource.getData().subscribe(data => this.test = data);
        return this.test;
    }
    btnClickedEvent() {
        console.log("button has been clicked");
    }
    //getProducts(): Product[] {
    //    return this.products;
    //}
    //addCar(): void {
    //    this.cars.push({
    //        name: this.carItem.name,
    //        year: this.carItem.year
    //    });
    //}
    submit(user) {
        this._dataSource.saveUser(user)
            .subscribe((data) => { this.receivedUser = data; this.done = true; }, error => console.log(error));
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
//import { Product } from "./product.model";
//export class SimpleDataSource {
//    private data: Product[];
//    constructor() {
//        this.data = new Array<Product>(
//            new Product(1, "Kayak", "Watersports", 275),
//            new Product(2, "Lifejacket", "Watersports", 48.95),
//            new Product(3, "Soccer Ball", "Soccer", 19.50),
//            new Product(4, "Corner Flags", "Soccer", 34.95),
//            new Product(5, "Thinking Cap", "Chess", 16));
//    }
//    getData(): Product[] {
//        return this.data;
//    }
//}
//this._modalDialogService.open({
//        message: 'Змінити підприємство?',
//        buttons: [
//            {
//                type: 'ok'
//            },
//            {
//                type: 'cancel'
//            }
//        ]
//    }).then((result) => {
//        this._blockUI.start();
//        return this._companyCardService.setCurrentUserCompanyCode(this.selectedCompanyItem.code);
//    })
//    .then(() => {
//        this._toastr.success('Успішно змінено');
//        this._$window.location.reload();
//        this.modalInstance.close();
//    })
//    .catch((data) => {
//        if (data == 'cancel')
//            return;
//        this._toastr.error('Помилка:' + data);
//    })
//    .finally(() => {
//        this._blockUI.stop();
//    });
//# sourceMappingURL=app.component.js.map