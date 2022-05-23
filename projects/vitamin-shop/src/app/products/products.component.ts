import {Component, OnInit} from '@angular/core';
import {Product} from "../../interfaces/product";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  filteredProducts: Product[];

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.products = this.productsService.getAllProducts();
  }

  filterProducts($event: any) {
    this.filteredProducts = $event;
  }
}
