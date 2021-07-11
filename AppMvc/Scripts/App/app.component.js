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
const app_service_1 = require("./app.service");
let AppComponent = class AppComponent {
    constructor(dataSource) {
        this.dataSource = dataSource;
        //private products: Product[] = new Array<Product>();
        this.test = "null";
    }
    ngOnInit() {
        console.log("hello");
    }
    //getProducts(): Product[] {
    //    return this.products;
    //}
    getProducts() {
        var data1 = this.dataSource.getData().subscribe(data => this.test = data);
        return this.test;
    }
    btnClickedEvent() {
        console.log("button has been clicked");
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: '../Scripts/App/app.component.html'
    }),
    __metadata("design:paramtypes", [app_service_1.RestDataSource])
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