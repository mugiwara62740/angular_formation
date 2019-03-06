import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  public stocks : Array<Stock>;
  constructor() { }

  ngOnInit() {
    this.stocks = [
        new Stock('Test Stock Company', 'TSC', 85, 80),
        new Stock('Second Stock Company', 'SSC', 10, 20),
        new Stock('Last Stock Company', 'LSC', 876, 765)
    ];
  }
    
  toggleFavorite(event,index) {
      console.log('We are toggling the favorite state for this stock', event);
      this.stocks[index].favorite = !this.stocks[index].favorite;
  }
    
  trackStockByCode(index, stock) {
    return stock.code;
  }

}
