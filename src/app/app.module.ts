import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './core/modules/routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { JliveryComponent } from './jlivery.component';
import { ProductsComponent } from './modules/products';
import { SplashScreenComponent } from './core/presentational/splashscreen';
import { RestaurantsComponent } from './modules/restaurants/restaurants.component';
import { HeaderComponent } from './core/presentational/header/header.component';
import { SearchboxComponent } from './core/presentational/searchbox/searchbox.component';

@NgModule({
  declarations: [
    JliveryComponent,
    ProductsComponent,
    SplashScreenComponent,
    RestaurantsComponent,
    HeaderComponent,
    SearchboxComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [JliveryComponent]
})
export class AppModule { }
