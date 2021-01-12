import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Stock } from '../stock.model';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {
  stocks$:Observable<Stock[]>;

  constructor(private store: StoreService, private router: Router){
    this.stocks$ = this.store.getStocks();
  }

  ngOnInit(): void {
  }

 public stockClicked(stock: Stock){
  this.router.navigate(['/stock-details'], { queryParams: {stockId: stock.id}});
 }
}
