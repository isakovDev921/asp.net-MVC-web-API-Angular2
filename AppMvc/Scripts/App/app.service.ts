﻿import { Injectable, OpaqueToken, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { User } from "./model";


@Injectable()
export class RestDataSource {

    constructor(private _http: Http) { }

   
    getData(): Observable<string> {
        return this._http.get("http://localhost:61374/Home/GetTestString")
            .map(response => response.json());
    }

    saveUser(user: User): Observable<User> {

        return this._http.post("http://localhost:61374/Home/CreateUser", user)
            .map(response => response.json());
    }
}

//import { Product } from "./product.model";
//import { Observable } from "rxjs/Observable";
//import "rxjs/add/observable/from";
//@Injectable()
//export class StaticDataSource {
//    private products: Product[] = [
//        new Product(1, "Product 1", "Category 1", "Product 1 (Category 1)", 100),
//        new Product(2, "Product 2", "Category 1", "Product 2 (Category 1)", 100),
//        new Product(3, "Product 3", "Category 1", "Product 3 (Category 1)", 100),
//        new Product(4, "Product 4", "Category 1", "Product 4 (Category 1)", 100),
//        new Product(5, "Product 5", "Category 1", "Product 5 (Category 1)", 100),
//        new Product(6, "Product 6", "Category 2", "Product 6 (Category 2)", 100),
//        new Product(7, "Product 7", "Category 2", "Product 7 (Category 2)", 100),
//        new Product(8, "Product 8", "Category 2", "Product 8 (Category 2)", 100),
//        144 Глава 7. SportsStore: реальное приложение
//    new Product(9, "Product 9", "Category 2", "Product 9 (Category 2)", 100),
//    new Product(10, "Product 10", "Category 2", "Product 10 (Category 2)", 100),
//    new Product(11, "Product 11", "Category 3", "Product 11 (Category 3)", 100),
//    new Product(12, "Product 12", "Category 3", "Product 12 (Category 3)", 100),
//    new Product(13, "Product 13", "Category 3", "Product 13 (Category 3)", 100),
//    new Product(14, "Product 14", "Category 3", "Product 14 (Category 3)", 100),
//    new Product(15, "Product 15", "Category 3", "Product 15 (Category 3)", 100),
//    ];
//    getProducts(): Observable<Product[]> {
//        return Observable.from([this.products]);
//    }
//}

//import { Injectable } from "@angular/core";
//import { Product } from "./product.model";
//import { StaticDataSource } from "./static.datasource";
//@Injectable()
//export class ProductRepository {
//    private products: Product[] = [];
//    private categories: string[] = [];
//    constructor(private dataSource: StaticDataSource) {
//        dataSource.getProducts().subscribe(data => {
//            this.products = data;
//            this.categories = data.map(p => p.category)
//                .filter((c, index, array) => array.indexOf(c) == index).sort();
//        });
//    }
//    getProducts(category: string = null): Product[] {
//        return this.products
//            .filter(p => category == null || category == p.category);
//    }
//    getProduct(id: number): Product {
//        return this.products.find(p => p.id == id);
//    }
//    getCategories(): string[] {
//        return this.categories;