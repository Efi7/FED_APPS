import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-current-bill',
  templateUrl: './current-bill.component.html',
  styleUrls: ['./current-bill.component.scss']
})
export class CurrentBillComponent implements OnInit {
  @Input() currentBill;

  constructor() {
  }

  ngOnInit(): void {
  }

}
