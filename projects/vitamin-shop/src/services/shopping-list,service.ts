import {Injectable} from "@angular/core";
import {ProductsService} from "./products.service";
import {Product} from "../interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private shoppingCartProductsIds = [];

  constructor(private productsService: ProductsService) {
  }

  getShoppingCartProducts(): Product[] {
    const shoppingCartProducts = this.productsService.getAllProducts().filter(product =>
      this.shoppingCartProductsIds.includes(product.id));
    return (shoppingCartProducts);
  }

  getTotalPrice() {
    let totalPrice = 0;
    const shoppingCartProducts = this.productsService.getAllProducts().filter(product =>
      this.shoppingCartProductsIds.includes(product.id));
    shoppingCartProducts.forEach(product => {
      totalPrice += product.price;
    });
    return totalPrice;
  }

  addProductToShoppingCart(id) {
    if (!this.shoppingCartProductsIds.find(productId => productId == id)) {
      this.shoppingCartProductsIds.push(id);
      alert(`added to the list!`);
      this.shoppingCartProductsIds.sort((a, b) => a - b);
    } else {
      alert(`already exist in the list!`);
    }
  }

  removeProductFromShoppingCart(id: number) {
    this.shoppingCartProductsIds = this.shoppingCartProductsIds.filter(productId => productId !== id);
    const shoppingCartProducts = this.productsService.getAllProducts().filter(product =>
      this.shoppingCartProductsIds.includes(product.id));
    return (shoppingCartProducts);
  }

}
