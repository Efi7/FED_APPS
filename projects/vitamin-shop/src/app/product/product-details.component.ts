import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../interfaces/product";
import {ProductsService} from "../../services/products.service";
import {ShoppingListService} from "../../services/shopping-list,service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService,
              private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));
    this.product = this.productsService.getCurrentProduct(productIdFromRoute);
  }

  addToCart(id: number) {
    this.shoppingListService.addProductToShoppingCart(id);
  }
}
