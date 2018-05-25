import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './jlivery.component.html',
  styleUrls: ['./jlivery.component.scss']
})
export class JliveryComponent {
  title = 'app';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.router.navigate(['/splashscreen']);
  }
}
