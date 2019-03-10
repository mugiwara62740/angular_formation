import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Stock } from '../model/stock';

@Injectable()
export class StockService {

    constructor(private http: HttpClient) {}

    getStocks() : Observable<Stock[]> {
        return this.http.get<Stock[]>('/api/stock');
    }

    createStock(stock: Stock): Observable<any> {
        return this.http.post('/api/stock', stock);
    }

    makeFailingCall() {
        return this.http.get('/api/fail');
    }

    toggleFavorite(stock: Stock): Observable<Stock> {
        return this.http.patch<Stock>('/api/stock/' + stock.code,
                                      {
            favorite: !stock.favorite
        });
    }
}
