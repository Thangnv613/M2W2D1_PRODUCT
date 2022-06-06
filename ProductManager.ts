import { Product } from "./Product";

export class ProductManager {
    private products: Product[] = [];

    constructor() {
    }

    getAll() {
        return this.products;
    }

    add(product: Product) {
        this.products.push(product);
    }

}