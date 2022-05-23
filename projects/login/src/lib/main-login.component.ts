import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {LoginTypesEnum} from "./login-types.enum";

@Component({
  selector: 'fed-main-login',
  template: `
    <div [ngSwitch]="currentComponent">
      <fed-login (navigateTo)="navigate($event)"
                 (loginEvent)="login($event)"
                 *ngSwitchCase="'login'"></fed-login>
      <fed-register (navigateTo)="navigate($event)"
                    (registerEvent)="register($event)"
                    *ngSwitchCase="'register'"></fed-register>
      <fed-forgot-password (navigateTo)="navigate($event)"
                           (resetPasswordEvent)="resetPassword($event)"
                           *ngSwitchCase="'forgotPassword'"></fed-forgot-password>
    </div>
  `,
  styles: []
})
export class MainLoginComponent implements OnInit, OnDestroy {

  currentComponent = 'login';
  @Output() loginEvents = new EventEmitter<{ type: LoginTypesEnum, username: string, password: string }>();

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  navigate(value: string) {
    this.currentComponent = value;
  }

  login($event: { username: string; password: string }) {
    this.loginEvents.emit({
      type: LoginTypesEnum.login,
      username: $event.username,
      password: $event.password
    });
  }

  register($event: { username: string; password: string }) {
    this.loginEvents.emit({
      type: LoginTypesEnum.register,
      username: $event.username,
      password: $event.password
    });
  }

  resetPassword($event: { username: string; newPassword: string }) {
    this.loginEvents.emit({
      type: LoginTypesEnum.forgotPassword,
      username: $event.username,
      password: $event.newPassword
    });
  }
}
