import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { BestDealsComponent } from './home/best-deals/best-deals.component';
import { HowToOrderComponent } from './home/how-to-order/how-to-order.component';
import { LoremAppComponent } from './home/lorem-app/lorem-app.component';
import { PopularBrandsComponent } from './home/popular-brands/popular-brands.component';
import { SearchComponent } from './home/search/search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BestDealsComponent,
    HowToOrderComponent,
    LoremAppComponent,
    PopularBrandsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,

    MatFormFieldModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
