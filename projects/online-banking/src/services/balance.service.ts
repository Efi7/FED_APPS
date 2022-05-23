import {Injectable} from "@angular/core";
import * as balance from "../assets/balance.json";
import {Balance} from "../interfaces/balance";

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  getAllUserBalance(): Balance[] {
    return JSON.parse(JSON.stringify(balance['default']));
  }
}
