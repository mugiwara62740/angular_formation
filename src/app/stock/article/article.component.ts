import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() public stock: Stock;
  @Output() private toggleFavorite: EventEmitter<Stock>;
    
  constructor() { 
    this.toggleFavorite = new EventEmitter<Stock>();
  }
    
  onToggleFavorite(event) {
      this.toggleFavorite.emit(this.stock);
  }

}
