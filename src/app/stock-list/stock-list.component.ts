import { Component, Input, OnInit } from '@angular/core';
import { Stock } from '../stock.model';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {

  @Input() stocks: Stock[];
  constructor() { }

  ngOnInit(): void {
  }

}
