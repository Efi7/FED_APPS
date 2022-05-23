import {Injectable} from "@angular/core";
import * as users from "../assets/users.json";
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usersList: User[] = [];

  constructor() {
    this.usersList = JSON.parse(JSON.stringify(users['default']));
  }

  checkWhetherLoginDetailsCorrect(name, password): boolean {
    return !!this.usersList.find((user: User) => {
      return user.username === name && user.password === password
    });
  }

  addNewUser(user: { username: string, password: string }): boolean {
    if (user.username && user.password) {
      let newUser: User = {id: this.usersList.length + 1, username: user.username, password: user.password};
      this.usersList.push(newUser);
      return true;
    }
    return false;
  }

  changePassword(editedUser: { username: string, password: string }): boolean {
    let destinationUser = this.usersList.find(user => user.username === editedUser.username);
    if (destinationUser) {
      let currentIndex = this.usersList.indexOf(destinationUser);
      this.usersList[currentIndex] = {...this.usersList[currentIndex], password: editedUser.password};
      return true;
    }
    return false;
  }
}
