import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  public stock : Stock;
    
  constructor() { }

  ngOnInit() {
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80);
  }
    
  toggleFavorite(event) {
      console.log('We are toggling the favorite state for this stock', event);
      this.stock.favorite = !this.stock.favorite;
  }

}
