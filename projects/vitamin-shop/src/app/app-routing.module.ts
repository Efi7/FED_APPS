import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SettingsComponent} from "./settings/settings.component";
import {ProductsComponent} from "./products/products.component";
import {LoginComponent} from "./login/login.component";
import {ProductDetailsComponent} from "./product/product-details.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {SuggestionsComponent} from "./suggestions/suggestions.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {
    path: 'shopping cart', component: ShoppingCartComponent, children: [
      {path: 'suggestions', component: SuggestionsComponent}
    ]
  },
  {path: 'settings', component: SettingsComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
