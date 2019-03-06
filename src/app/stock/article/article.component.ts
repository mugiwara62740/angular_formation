import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  public name : string;
  public code : string;
  public price : number;
  public previousPrice : number;
  public positiveChange: boolean;
  public favorite: boolean;
    
  constructor() { }

  ngOnInit() {
    this.name = 'Test Stock Company';
    this.code = 'TSC';
    this.price = 85;
    this.previousPrice = 80;
    this.positiveChange = this.price >= this.previousPrice;
    this.favorite = false;
  }
    
  toggleFavorite() {
      console.log('We are toggling the favorite state for this stock');
      this.favorite = !this.favorite;
  }

}
