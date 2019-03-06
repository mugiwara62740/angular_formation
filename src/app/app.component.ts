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
    ngOnInit(): void {
        this.stockObj = new Stock('Test Stock Company', 'TSC', 85, 80);
    }
}
