import { Component, OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';
import { RestDataSource } from "./app.service";


@Component({
    selector: 'my-app',
    templateUrl: '../Scripts/App/app.component.html'
})

export class AppComponent implements OnInit {
    temp: string;
    totalAngularPackages;
    //private products: Product[] = new Array<Product>();
    private test: string = "null";

    constructor(private dataSource: RestDataSource) {
      
    }

    ngOnInit() {
        console.log("hello");
    }

    //getProducts(): Product[] {
    //    return this.products;
    //}

    getProducts(): string {
        var data1 = this.dataSource.getData().subscribe(data => this.test = data);
        return this.test;
    }

    btnClickedEvent(): void {
        console.log("button has been clicked");
    }
}

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