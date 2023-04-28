import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

type Users = {
  user_id: number,
  username: string,
  password: string,
  email: string,
  first_name?: string,
  last_name?: string
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public users: Users[] = [];
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {

  }
   getUsers() {
     this.http.get("http://localhost:500/user_api/users")
      .subscribe((res) => {
        this.users = res as Users[];
        console.log(this.users)

      })
  }

}
