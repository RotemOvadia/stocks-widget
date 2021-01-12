export class Stock {
    id: number;
    name: string;
    symbol: string;
    precision: number; 

    constructor(    id: number, name: string, symbol: string, precision: number ){
        this.id = id;
        this.name = name;
        this.symbol = symbol;
        this.precision = precision;
    }
}
