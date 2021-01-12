import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable } from 'rxjs';
import { FeedResponse } from './feed-response.model';
import { NetworkService } from './network.service';
import { StockPrice } from './stock-price.model';
import { Stock } from './stock.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  stocks$: BehaviorSubject<Stock[]> = new BehaviorSubject<Stock[]>([]);  //change to Map
  stocksPriceHistory: Map<number, BehaviorSubject<StockPrice[]>> = new Map<number, BehaviorSubject<StockPrice[]>>();
  
  constructor(private networkService: NetworkService) { 
       this.networkService.getStocks().subscribe((stocks)=>{
          this.stocks$.next(stocks);
          interval(1000).subscribe(()=>{ //consider working with sockets
            this.updateFeed(stocks);
          })
      });
  }

  private updateFeed(stocks: Stock[]){
    this.networkService.getFeed().subscribe((feed:FeedResponse)=>{
      feed.stockPrices.forEach((stockPrice) => {
        const stock = stocks.find((stock) => stock.id === stockPrice.id); //check stock exists
        stock.setPrice(stockPrice);
      })
      this.stocks$.next(stocks);
      this.updatePriceHistory(feed.stockPrices);
    })
  }

  private updatePriceHistory(stockPrices: StockPrice[]){
    stockPrices.forEach((price) => {
      if (this.stocksPriceHistory.has(price.id) === false) { //check stock exists
        this.stocksPriceHistory.set(price.id, new BehaviorSubject<StockPrice[]>([]));
      }
      const stockPrices: StockPrice[] = this.stocksPriceHistory.get(price.id).value;
      stockPrices.push(price);
      if (stockPrices.length > 50) { //take from configuration
        stockPrices.shift();
      }
    
      this.stocksPriceHistory.get(price.id).next(stockPrices);
    })
  }

  public getStockHistory(stockId: number):Observable<StockPrice[]> {
    return this.stocksPriceHistory.get(stockId);
  }

  public getStocks(): Observable<Stock[]>{
    return this.stocks$;
  }
}
