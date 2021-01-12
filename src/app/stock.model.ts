import { StockPrice } from "./stock-price.model";

export class Stock {
    id: number;
    name: string;
    symbol: string;
    precision: number; 
    price: StockPrice;

    constructor(    id: number, name: string, symbol: string, precision: number ){
        this.id = id;
        this.name = name;
        this.symbol = symbol;
        this.precision = precision;
    }

    public setPrice(price: StockPrice){
        this.price = price;
    }
}
