import { Component, OnInit, Input} from '@angular/core';
import { Http, Response } from '@angular/http';
import { RestDataSource } from "./app.service";
import { User } from "./model";
import {
    FormControl, FormGroup, FormsModule, Validators, 
    ReactiveFormsModule, FormBuilder
} from '@angular/forms';

@Component({
    selector: 'my-app',
    templateUrl: '../Scripts/App/app.component.html',
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `]

})

export class AppComponent implements OnInit {
    //temp: string;
    //totalAngularPackages;
    //private products: Product[] = new Array<Product>();
    private test: string = "null";


    //carName = '';
    //carYear = 2017;
    //@Input() carItem: { name: string, year: number };


    //cars:[{name: string, year: number}] = [
    //    {
    //        name: 'Ford',
    //        year: 2015
    //    }];

     user: User = new User();
     receivedUser: User | undefined;
     done: boolean = false;
     myForm: FormGroup;
     
    constructor(
        private _dataSource: RestDataSource,
        private _http: Http,
        private _fb: FormBuilder
    ) {
        
        //this.myForm.valueChanges
        //    .subscribe((formValue) => {
        //        console.log(formValue);
        //    });
       
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
                (data: any) => { this.receivedUser = data; this.done = true; },
                error => console.log(error)
            );
    }

    getProducts(): string {
        var data1 = this._dataSource.getData().subscribe(data => this.test = data);
        return this.test;
    }

    //btnClickedEvent(): void {
    //    console.log("button has been clicked");
    //}

    //getProducts(): Product[] {
    //    return this.products;
    //}


    //addCar(): void {
    //    this.cars.push({
    //        name: this.carItem.name,
    //        year: this.carItem.year
    //    });
       
    //}

    
   
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