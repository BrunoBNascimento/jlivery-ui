import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class SplashScreenComponent {
  title = 'app';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    setTimeout(() => {
      return this.router.navigate(['/restaurants']);
    }, 5000);
  }
}
