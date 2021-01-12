import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable } from 'rxjs';
import { FeedResponse } from './feed-response.model';
import { NetworkService } from './network.service';
import { Stock } from './stock.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  stocks$: BehaviorSubject<Stock[]> = new BehaviorSubject<Stock[]>([]); 

  
  constructor(private networkService: NetworkService) { 
       this.networkService.getStocks().subscribe((stocks)=>{
          this.stocks$.next(stocks);
          interval(1000).subscribe(()=>{
            this.updateFeed(stocks);
          })
      });
  }

  private updateFeed(stocks: Stock[]){
    this.networkService.getFeed().subscribe((feed:FeedResponse)=>{
      feed.stockPrices.forEach((stockPrice)=>{
        const stock = stocks.find((stock)=> stock.id === stockPrice.id);
        stock.setPrice(stockPrice);
      })
      this.stocks$.next(stocks);
    })
  }

  public getStocks(): Observable<Stock[]>{
    return this.stocks$;
  }
}
