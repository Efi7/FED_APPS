import {NgModule} from '@angular/core';
import {MainLoginComponent} from './main-login.component';
import {RegisterComponent} from './register/register.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    MainLoginComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    MainLoginComponent
  ]
})
export class LoginModule {
}
