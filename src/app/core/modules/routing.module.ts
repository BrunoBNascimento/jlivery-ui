import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JliveryComponent } from '../../jlivery.component';
import { ProductsComponent } from '../../modules/products';
import { OptionalsComponent } from '../../modules/optionals/optionals.component';
import { RestaurantsComponent } from './../../modules/restaurants/restaurants.component';
import { SplashScreenComponent } from '../presentational/splashscreen';

const ROUTES: Routes = [
    { path: '', component: JliveryComponent, data: { page: 'home' }, pathMatch: 'full'},
    { path: 'splashscreen', component: SplashScreenComponent, data: { page: 'splashscreen' }, pathMatch: 'full'},
    { path: 'products', component: ProductsComponent, data: { page: 'products' }, pathMatch: 'full'},
    { path: 'restaurants', component: RestaurantsComponent, data: { page: 'restaurants' }, pathMatch: 'full'},
    { path: 'optionals', component: OptionalsComponent, data: { page: 'optionals' }, pathMatch: 'full'},
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class RoutingModule { }
