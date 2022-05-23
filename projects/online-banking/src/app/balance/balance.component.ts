import {Component, OnInit} from '@angular/core';
import {BalanceService} from "../../services/balance.service";
import {Balance} from "../../interfaces/balance";

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {
  balance: Balance[];
  filteredBalance: Balance[];

  constructor(private balanceService: BalanceService) {
  }

  ngOnInit(): void {
    this.balance = this.balanceService.getAllUserBalance();
  }

  filterBalance($event: any) {
    this.filteredBalance = $event;
  }

}
