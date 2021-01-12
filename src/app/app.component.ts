import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StockPrice } from './stock-price.model';
import { Stock } from './stock.model';
import { StoreService } from './store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stocks-widget-app';
  stocks$:Observable<Stock[]>;
  selectedStock: Stock;
  stockHistory$: Observable<StockPrice[]>;

  constructor(private store: StoreService){
    this.stocks$ = this.store.getStocks();
  }

  private handleStockClicked(stock: Stock){
    this.selectedStock = stock;
    this.stockHistory$ = this.store.getStockHistory(stock.id);
  }
}
