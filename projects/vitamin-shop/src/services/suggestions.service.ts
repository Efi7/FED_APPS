import {Injectable} from "@angular/core";
import {ProductsService} from "./products.service";
import {ShoppingListService} from "./shopping-list,service";

@Injectable({
  providedIn: 'root'
})
export class SuggestionsService {

  random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  constructor(private productsService: ProductsService,
              private shoppingListService: ShoppingListService) {
  }

  getSuggestions(id) {
    let allProducts = this.productsService.getAllProducts();
    let randomIds = this.getRandomIds(id, 2, allProducts.length);
    return allProducts.filter(product => randomIds.includes(product.id));
  }

  getRandomIds(id: number, times: number, listLength: number): number[] {
    const results = [];
    let limit = listLength;
    for (let i = 0; i < times; i++) {
      let randomNumber = this.random(1, listLength);
      if (!this.shoppingListService.getShoppingCartProducts().find(product => product.id === randomNumber)) {
        results.push(randomNumber);
      } else {
        i--;
        limit++;
      }
    }
    console.log(results);
    return results;
  }
}
