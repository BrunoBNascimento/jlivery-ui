import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JliveryComponent } from '../../jlivery.component';
import { ProductsComponent } from '../../modules/products';
import { SplashScreenComponent } from '../presentational/splashscreen';

const ROUTES: Routes = [
    { path: '', component: JliveryComponent, pathMatch: 'full'},
    { path: 'splashscreen', component: SplashScreenComponent, pathMatch: 'full'},
    { path: 'products', component: ProductsComponent, pathMatch: 'full'},
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
