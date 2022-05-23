import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'fed-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username = '';
  password = '';
  reEnteredPassword = '';
  @Output() registerEvent = new EventEmitter<{ username: string, password: string }>();
  @Output() navigateTo = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  isRegisterActive = () => (this.username.length && this.password.length && (this.password === this.reEnteredPassword));

  onRegister() {
    this.registerEvent.emit({username: this.username, password: this.password});
  }

  navigate(value: string) {
    this.navigateTo.emit(value);
  }
}
