import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-optionals',
  templateUrl: './optionals.component.html',
  styleUrls: ['./optionals.component.scss']
})
export class OptionalsComponent implements OnInit {

  title: String;
  optionals: any[];
  selecteds: any[];

  constructor(private router: Router) {
    this.optionals = [
      { id: 1, name: 'Folha de louro', price: 1.90 }
    ];
    this.title = 'Opcionais';
    this.selecteds = [];
  }

  ngOnInit() {
  }

  goToProducts() {
    alert('Adicionado ao carrinho');
    this.router.navigate(['/products']);
  }

  flagCheckbox(id) {
    this.selecteds.push(id);
  }

}
