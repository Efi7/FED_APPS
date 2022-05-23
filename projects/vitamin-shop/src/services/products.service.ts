import {Injectable} from "@angular/core";
import * as products from "../assets/products.json";
import {Product} from "../interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() {
  }

  getAllProducts():Product[] {
    return JSON.parse(JSON.stringify(products['default']));
  }

  getCurrentProduct(id) {
    let allProducts = JSON.parse(JSON.stringify(products['default']));
    return allProducts.find(product => product.id === id);
  }
}
