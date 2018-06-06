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
import { LoginComponent } from './modules/login/login.component';
import { CheckoutComponent } from './modules/checkout/checkout.component';

@NgModule({
  declarations: [
    JliveryComponent,
    ProductsComponent,
    SplashScreenComponent,
    RestaurantsComponent,
    OptionalsComponent,
    CarrinhoComponent,
    LoginComponent,
    CheckoutComponent,
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
