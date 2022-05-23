import {Injectable} from "@angular/core";
import * as creditCard from "../assets/credit-card.json";
import {CreditCard} from "../interfaces/creditCard";

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  getCreditCardTransactions(): CreditCard[] {
    return JSON.parse(JSON.stringify(creditCard['default']));
  }

  getCurrentBill(): number {
    let creditCardTransactions = this.getCreditCardTransactions();
    let total = 0;
    creditCardTransactions.forEach(transaction => {
      total += transaction.amount;
    });
    return total;
  }
}
