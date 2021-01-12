import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Stock } from '../stock.model';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {

  @Input() stocks: Stock[];
  @Output() stockClicked: EventEmitter<Stock> = new EventEmitter<Stock>();
  constructor() { }

  ngOnInit(): void {
  }


}
