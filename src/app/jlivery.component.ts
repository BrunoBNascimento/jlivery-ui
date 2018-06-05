import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from './core/commons/animations/routerTransition';

@Component({
  selector: 'app-root',
  animations: [ routerTransition ],
  templateUrl: './jlivery.component.html',
  styleUrls: ['./jlivery.component.scss']
})
export class JliveryComponent {
  title = 'app';

  getPage(outlet) {
    return outlet.activatedRouteData['page'] || 'splashscreen';
  }
}
