import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RestDataSource } from "./app.service";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        RestDataSource
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {
}

