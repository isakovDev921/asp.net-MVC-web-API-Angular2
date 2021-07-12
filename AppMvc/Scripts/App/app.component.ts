import { Component, OnInit, Input} from '@angular/core';
import { Http, Response } from '@angular/http';
import { RestDataSource } from "./app.service";
import { User } from "./model";


@Component({
    selector: 'my-app',
    templateUrl: '../Scripts/App/app.component.html'
})

export class AppComponent implements OnInit {
    temp: string;
    totalAngularPackages;
    //private products: Product[] = new Array<Product>();
    private test: string = "null";


    carName = '';
    carYear = 2017;
    @Input() carItem: { name: string, year: number };


    cars:[{name: string, year: number}] = [
        {
            name: 'Ford',
            year: 2015
        }];

    user: User = new User("initComponent", 0); // данные вводимого пользователя
    receivedUser: User | undefined; // полученный пользователь
    done: boolean = false;

    constructor(private _dataSource: RestDataSource,
        private _http: Http) {
      
    }

    ngOnInit() {
        console.log("hello");
    }

    //getProducts(): Product[] {
    //    return this.products;
    //}

    getProducts(): string {
        var data1 = this._dataSource.getData().subscribe(data => this.test = data);
        return this.test;
    }

    btnClickedEvent(): void {
        console.log("button has been clicked");
    }


    addCar(): void {
        this.cars.push({
            name: this.carItem.name,
            year: this.carItem.year
        });
       
    }

    
    submit(user: User) {
        this._dataSource.saveUser(user)
            .subscribe(
                (data: any) => { this.receivedUser = data; this.done = true; },
                error => console.log(error)
            );
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