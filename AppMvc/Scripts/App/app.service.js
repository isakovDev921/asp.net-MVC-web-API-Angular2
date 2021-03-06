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
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
const model_1 = require("./model");
let RestDataSource = class RestDataSource {
    constructor(_http) {
        this._http = _http;
        this.user = new model_1.User();
        this._ulr = "http://localhost:61374";
    }
    saveUser(user) {
        return this._http.post(`${this._ulr}/Home/CreateUser`, user)
            .map(response => response.json());
    }
    getUsers() {
        return this._http.get(`${this._ulr}/Home/GetUsers`)
            .map(response => response.json());
    }
    deleteUser(Id) {
        this.user.Id = Id;
        return this._http.post(`${this._ulr}/Home/DeleteUser`, this.user)
            .map(response => response.json());
    }
};
RestDataSource = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RestDataSource);
exports.RestDataSource = RestDataSource;
//# sourceMappingURL=app.service.js.map