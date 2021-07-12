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
let AppComponent = class AppComponent {
    constructor(_dataSource, _http) {
        this._dataSource = _dataSource;
        this._http = _http;
        //private products: Product[] = new Array<Product>();
        this.test = "null";
        this.carName = '';
        this.carYear = 2017;
        this.cars = [
            {
                name: 'Ford',
                year: 2015
            }
        ];
        this.user = new model_1.User("initComponent", 0); // данные вводимого пользователя
        this.done = false;
    }
    ngOnInit() {
        console.log("hello");
    }
    //getProducts(): Product[] {
    //    return this.products;
    //}
    getProducts() {
        var data1 = this._dataSource.getData().subscribe(data => this.test = data);
        return this.test;
    }
    btnClickedEvent() {
        console.log("button has been clicked");
    }
    addCar() {
        this.cars.push({
            name: this.carItem.name,
            year: this.carItem.year
        });
    }
    submit(user) {
        this._dataSource.saveUser(user)
            .subscribe((data) => { this.receivedUser = data; this.done = true; }, error => console.log(error));
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AppComponent.prototype, "carItem", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: '../Scripts/App/app.component.html'
    }),
    __metadata("design:paramtypes", [app_service_1.RestDataSource,
        http_1.Http])
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
//# sourceMappingURL=app.component.js.map