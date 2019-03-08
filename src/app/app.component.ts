import { Component, SimpleChanges, OnInit, OnChanges, OnDestroy, DoCheck, AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit } from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentChecked,
AfterContentInit, AfterViewChecked, AfterViewInit {
  title = 'magasin';
    public stockObj: Stock;
    private counter: number = 1;
    ngOnInit(): void {
        this.stockObj = new Stock('Test Stock Company', 'TSC', 85, 80);
        console.log('App Component - On Init');
    }
    ngAfterViewInit(): void {
        console.log('App Component - After View Init');
    }
    ngAfterViewChecked(): void {
        console.log('App Component - After View Checked');
    }
    ngAfterContentInit(): void {
        console.log('App Component - After Content Init');
    }
    ngAfterContentChecked(): void {
        console.log('App Component - After Content Checked');
    }
    ngDoCheck(): void {
        console.log('App Component - Do Check');
    }
    ngOnDestroy(): void {
        console.log('App Component - On Destroy');
    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log('App Component - On Changes - ', changes);
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
        this.stockObj = new Stock('Test Stock Company - ' + this.counter++, 'TSC', 85, 80, 'NASDAQ' );
    }
    changeStockPrice() {
        // This will not update the value in the stock item component
        // because it is changing the same reference and angular will
        // not check for it in the OnPush change detection strategy.
        this.stockObj.price += 10;
    }
    
    testMethod() {
        console.log('Test method in AppComponent triggered');
    }
}
