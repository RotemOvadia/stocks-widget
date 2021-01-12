import { Component } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor(private store: StoreService){
    this.stocks$ = this.store.getStocks();
  }
}
