import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './core/modules/routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { JliveryComponent } from './jlivery.component';
import { ProductsComponent } from './modules/products';
import { SplashScreenComponent } from './core/presentational/splashscreen';
import { RestaurantsComponent } from './modules/restaurants/restaurants.component';
import { OptionalsComponent } from './modules/optionals/optionals.component';
import { CarrinhoComponent } from './modules/carrinho/carrinho.component';

@NgModule({
  declarations: [
    JliveryComponent,
    ProductsComponent,
    SplashScreenComponent,
    RestaurantsComponent,
    OptionalsComponent,
    CarrinhoComponent
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
