import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'fed-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  @Output() loginEvent = new EventEmitter<{ username: string, password: string }>();
  @Output() navigateTo = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  isLoginActive = () => this.username.length && this.password.length;

  onLogin() {
    this.loginEvent.emit({username: this.username, password: this.password});
  }

  navigate(value: string) {
    this.navigateTo.emit(value);
  }
}
