import {Component, OnInit} from '@angular/core';
import {LoginTypesEnum} from "login";
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  login($event: { type: LoginTypesEnum; username: string; password: string }) {
    switch ($event.type) {
      case LoginTypesEnum.login:
        if (this.loginService.checkWhetherLoginDetailsCorrect($event.username, $event.password)) {
          this.router.navigate(['products']);
        } else {
          alert('the user or password incorrect!');
        }
        break;
      case LoginTypesEnum.register:
        if (this.loginService.addNewUser({username: $event.username, password: $event.password})) {
          this.router.navigate(['products']);
        } else {
          alert('something went wrong! try again...');
        }
        break;
      case LoginTypesEnum.forgotPassword:
        if (this.loginService.changePassword({username: $event.username, password: $event.password})) {
          this.router.navigate(['products']);
        } else {
          alert('we can\'t find you');
        }
        break;
    }
  }
}
