import { StockPrice } from "./stock-price.model";

export class FeedResponse {
    stockPrices: StockPrice[];
    lastUpdate: Date;

    constructor(stockPrices: StockPrice[], lastUpdate: Date){
        this.stockPrices = stockPrices;
        this.lastUpdate = lastUpdate;
    }
}
