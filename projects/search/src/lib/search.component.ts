import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'fed-search',
  template: `
    <input (keyup)="filterList($event)">
  `,
  styles: []
})
export class SearchComponent implements OnInit {
  @Input() originalList: any[];
  @Input() keys: string[];
  @Output() filteredList = new EventEmitter<any[]>();

  constructor() {
  }

  ngOnInit(): void {
    this.filteredList.emit(this.originalList);
  }

  filterList(e) {
    const value = e.target.value.toLowerCase();

    const newList = this.originalList.filter(obj => {
      return Object.keys(obj).some(key => {
        if (this.keys && !this.keys.includes(key)) {
          return false
        } else {
          let currVal: string = obj[key].toString().toLowerCase();
          return currVal.includes(value)
        }
      });
    })

    this.filteredList.emit(newList);
  }
}
