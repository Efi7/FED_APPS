import {Component} from '@angular/core';
import {routerNames} from "./app-routing.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routersNames = routerNames;
}
