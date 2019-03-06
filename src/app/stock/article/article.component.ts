import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  public stock : Stock;
  public stockClasses;
  constructor() { }

  ngOnInit() {
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80);
    let diff = (this.stock.price / this.stock.previousPrice) - 1;
    let largeChange = Math.abs(diff) > 0.01;
    this.stockClasses = {
        "positive": this.stock.isPositiveChange(),
        "negative": !this.stock.isPositiveChange(),
        "large-change": largeChange,
        "small-change": !largeChange
    };
  }
    
  toggleFavorite(event) {
      console.log('We are toggling the favorite state for this stock', event);
      this.stock.favorite = !this.stock.favorite;
  }

}
