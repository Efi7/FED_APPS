import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {BalanceComponent} from "./balance/balance.component";
import {InvestmentsComponent} from "./investments/investments.component";
import {CreditCardComponent} from "./credit-card/credit-card.component";
import {SettingsComponent} from "./settings/settings.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home page', component: HomeComponent},
  {path: 'balance', component: BalanceComponent},
  {path: 'investments', component: InvestmentsComponent},
  {path: 'credit card', component: CreditCardComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '', redirectTo: 'home page', pathMatch: 'full'},
  {path: '**', redirectTo: 'home page'},
];

export const routerNames: { name: string }[] = routes.filter(route => route.path !== '' && route.path !== '**')
  .map(route => ({name: route.path}));

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
