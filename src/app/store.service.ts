import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
      });
  }

  public getStocks(): Observable<Stock[]>{
    return this.stocks$;
  }
}
