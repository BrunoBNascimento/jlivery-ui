import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './core/modules/routing.module';

import { JliveryComponent } from './jlivery.component';
import { ProductsComponent } from './modules/products';
import { SplashScreenComponent } from './core/presentational/splashscreen';

@NgModule({
  declarations: [
    JliveryComponent,
    ProductsComponent,
    SplashScreenComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [JliveryComponent]
})
export class AppModule { }
