import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ProductsComponent} from './products/products.component';
import {SettingsComponent} from './settings/settings.component';
import {ProductDetailsComponent} from './product/product-details.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {SuggestionsComponent} from './suggestions/suggestions.component';
import {LoginModule} from "@efi098/login";
import {SearchModule} from "@efi098/search";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    SettingsComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    SuggestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    SearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
