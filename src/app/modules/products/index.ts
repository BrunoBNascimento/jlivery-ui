import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  title = 'Produtos';
  products = [
    { name: 'Feijoada da mamãe', price: 19.99, img: 'http://www.baratocoletivo.com.br/static/teamb/2016/1028/oferta_14776875143013.jpg' }
  ];
}
