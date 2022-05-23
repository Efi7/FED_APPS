import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {LoginModule} from "@efi098/login";
import {SearchModule} from "@efi098/search";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {BalanceComponent} from './balance/balance.component';
import {InvestmentsComponent} from './investments/investments.component';
import {CreditCardComponent} from './credit-card/credit-card.component';
import {SettingsComponent} from './settings/settings.component';
import { CurrentBillComponent } from './current-bill/current-bill.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BalanceComponent,
    InvestmentsComponent,
    CreditCardComponent,
    SettingsComponent,
    CurrentBillComponent
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
