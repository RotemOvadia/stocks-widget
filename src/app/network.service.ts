import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from './stock.model';
import {map} from "rxjs/operators";
import { FeedResponse } from './feed-response.model';
import { StockPrice } from './stock-price.model';


@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private http: HttpClient) { }

  //handle network errors
  public getStocks():Observable <Stock[]> {
    return this.http.get('http://35.235.42.46/api/stock').pipe( //handle not correct input
      map((stocks:[]) => stocks.map(stock => new Stock(stock['Id'], stock['Name'], stock['Symbol'], stock['PrecisionDigit'])))
    );
  }

  //handle network errors
  public getFeed():Observable <FeedResponse> {
    return this.http.get('http://35.235.42.46/api/feeds').pipe(
      map((response) => {
        //check json structure
        const lastUpdate = response['LastUpdate'];
        const stockPrices: StockPrice[] = [];
        
        response['Feeds'].forEach(stockPrice => {
          //handle incorrect data
          stockPrices.push(new StockPrice(stockPrice["StockId"], stockPrice["BuyPrice"], stockPrice["SellPrice"]))
        });
        return new FeedResponse(stockPrices, lastUpdate);
      })
    );
  }

}
