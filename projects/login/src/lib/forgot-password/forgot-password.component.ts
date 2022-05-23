import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'fed-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  username = '';
  newPassword = '';
  reEnteredNewPassword = '';
  @Output() resetPasswordEvent = new EventEmitter<{ username: string, newPassword: string }>();
  @Output() navigateTo = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  isForgotPasswordActive = () => (this.username.length && this.newPassword.length && (this.newPassword === this.reEnteredNewPassword));

  onResetPassword() {
    this.resetPasswordEvent.emit({username: this.username, newPassword: this.newPassword});
  }

  navigate(value: string) {
    this.navigateTo.emit(value);
  }
}
