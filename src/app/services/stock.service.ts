import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { throwError as ObservableThrow} from "rxjs"
import { of as ObservableOf } from 'rxjs';
import { Stock } from '../model/stock';

@Injectable()
export class StockService {

    private stocks: Stock[];
    constructor(private http : HttpClient) {
    }

    getStocks() : Observable<Stock[]> {
        return this.http.get<Stock[]>('/api/stock');
    }

    createStock(stock: Stock): Observable<any> {
        return this.http.post('/api/stock', stock)
    }

    toggleFavorite(stock: Stock): Observable<Stock> {
        return this.http.patch<Stock>('/api/stock/' + stock.code,
                                      {
            favorite: !stock.favorite
        });
    }
}
