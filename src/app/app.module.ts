import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticleComponent } from './stock/article/article.component';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    CreateStockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
