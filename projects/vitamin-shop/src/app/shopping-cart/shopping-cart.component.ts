import {Component, OnChanges, OnInit} from '@angular/core';
import {ShoppingListService} from "../../services/shopping-list,service";
import {Product} from "../../interfaces/product";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit, OnChanges {
  shoppingList: Product[];
  totalPrice;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnChanges() {

  }

  ngOnInit(): void {
    this.shoppingList = this.shoppingListService.getShoppingCartProducts();
    // this.totalPrice = this.shoppingListService.getTotalPrice();
  }

  removeProductFromCart(id: number) {
    this.shoppingList = this.shoppingListService.removeProductFromShoppingCart(id);
  }
}
