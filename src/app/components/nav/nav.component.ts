import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(private router: Router) {
  }
  redirectToProfile() {
    this.router.navigate(['/your_profile']);
  }

  redirectToHome() {
    this.router.navigate(['/users']);
  }

  redirectToAbout() {
    this.router.navigate(['/users']);
  }
}
