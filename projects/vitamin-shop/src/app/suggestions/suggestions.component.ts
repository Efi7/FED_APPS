import {Component, OnInit} from '@angular/core';
import {SuggestionsService} from "../../services/suggestions.service";
import {Product} from "../../interfaces/product";
import {ShoppingListService} from "../../services/shopping-list,service";

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {
  suggestionsList: Product[] = [];

  constructor(private suggestionsService: SuggestionsService,
              private shoppingListService: ShoppingListService) {
  }


  ngOnInit(): void {
    let shoppingListIds: number[] = this.shoppingListService.getShoppingCartProducts().map(product => product.id);
    if (shoppingListIds.length) {
      let randomProductIdIndex: number = this.suggestionsService.random(1, shoppingListIds.length) - 1;
      let randomId = shoppingListIds[randomProductIdIndex];
      this.suggestionsList = this.suggestionsService.getSuggestions(randomId);
    }
  }

}
