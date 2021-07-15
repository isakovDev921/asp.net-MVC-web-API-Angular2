export class Product {
    constructor(public id?: number,
        public name?: string,
        public category?: string,
        public price?: number) { }
}

export class User {
    constructor(
        public Id?: number,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public age?: number,
        public phone?: string) { }
}
