import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {ListComponent} from "./list/list.component";
import {AuthenticationGuard} from "./authentication.guard";
import {SingleUserComponent} from "./single-user/single-user.component";

const routes: Routes = [
  {path: "", redirectTo: "/login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "users",component: ListComponent, canActivate: [AuthenticationGuard]},
  {path: "user/:user_id", component: SingleUserComponent, canActivate: [AuthenticationGuard]},
  {path: "signup", component: SignupComponent},
  {path: "**", component: NotFoundComponent, canActivate: [AuthenticationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
