export class StockPrice {
    id: number;
    buyPrice: number;
    sellPrice: number;

    constructor(    id: number, buyPrice: number, sellPrice: number){
        this.id = id;
        this.buyPrice = buyPrice; //check is positive number 
        this.sellPrice = sellPrice; //check is positive number 

    }
}
