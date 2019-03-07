import { Component , ViewEncapsulation } from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'magasin';
    public stockObj: Stock;
    private counter: number = 1;
    ngOnInit(): void {
        this.stockObj = new Stock('Test Stock Company', 'TSC', 85, 80);
    }
    
    onToggleFavorite(stock: Stock) {
        // This will update the value in the stock item component
        // Because it is triggered as a result of an event
        // binding from the stock item component
        this.stockObj.favorite = !this.stockObj.favorite;
    }
    changeStockObject() {
        // This will update the value in the stock item component
        // Because we are creating a new reference for the stock input
        this.stockObj = new Stock('Test Stock Company - ' + this.counter++, 'TSC', 85, 80);
    }
    changeStockPrice() {
        // This will not update the value in the stock item component
        // because it is changing the same reference and angular will
        // not check for it in the OnPush change detection strategy.
        this.stockObj.price += 10;
    }
}
