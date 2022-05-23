import {Component, OnInit} from '@angular/core';
import {CreditCard} from "../../interfaces/creditCard";
import {CreditCardService} from "../../services/creditCard.service";

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {
  creditCardBill: CreditCard[];
  filteredCreditCardBill: CreditCard[];

  constructor(private creditCardService: CreditCardService) {
  }

  ngOnInit(): void {
    this.creditCardBill = this.creditCardService.getCreditCardTransactions();
  }

  filterCreditCardBill($event: any) {
    this.filteredCreditCardBill = $event;
  }

  CurrentBill() {
    return this.creditCardService.getCurrentBill();
  }
}
