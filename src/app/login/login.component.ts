import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

type Users = {
  user_id: number,
  username: string,
  password: string,
  email: string,
  first_name?: string,
  last_name?: string

}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public users: Users[] = [];

  //form inputs
  public email_input: string = '';
  public password_input: string = '';

  //data for local storage
  private user = {
    id:20,
    username: "dido"
  }
  public token: string = '';

  constructor(private router: Router,private http: HttpClient) {
  }

  ngOnInit(): void {
    if (localStorage.getItem("loggedUser")) {
      this.router.navigateByUrl("/users")
    }
  }


  login() {
    this.http.get("http://localhost:500/user_api/users")
      .subscribe((res) => {
        this.users = res as Users[];
        const userExist = this.users.find(u => u.email == this.email_input && u.password == this.password_input)
        console.log(userExist)
        if (userExist){
          this.user = {
            id: userExist.user_id,
            username: userExist.username
          }
          localStorage.setItem("loggedUser",JSON.stringify(this.user));

          this.router.navigateByUrl("/users")
        }
        })


    // email (READY)
    // password (READY)
    // API login
    // token
    // redirect (READY)




}
}
