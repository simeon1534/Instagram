import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient,HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(private router: Router, private http: HttpClient) {
  }

  public searchText: any;
  public currentUser: any;
  search() {

    const headers = new HttpHeaders({
      Authorization: "abc123"
    });

    this.http.get(`http://localhost:500/user_api/username/${this.searchText}`, {headers})
      .subscribe((res) => {
        this.currentUser = res;

      })
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
