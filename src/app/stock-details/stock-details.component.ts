import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StockPrice } from '../stock-price.model';
import { Stock } from '../stock.model';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.scss']
})
export class StockDetailsComponent  {

  stock: Stock;
  stockPrices$: Observable<StockPrice[]>;

  constructor(private store: StoreService, private router: Router, private activatedRoute: ActivatedRoute,){
    const stockId:number = Number(this.activatedRoute.snapshot.queryParams["stockId"]);
    this.store.getStock(stockId).subscribe((stock) => {
      this.stock = stock;
    })
    this.stockPrices$ = this.store.getStockHistory(stockId);
  }

  backToStocksList(){
    this.router.navigate(['/stock-list']);

  }



}
