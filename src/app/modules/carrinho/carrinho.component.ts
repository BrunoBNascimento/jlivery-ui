import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {
  title: String;

  constructor() {
    this.title = 'Carrinho';
  }

  ngOnInit() {
  }

}
