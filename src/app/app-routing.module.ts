import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {ListComponent} from "./components/list/list.component";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {SingleUserComponent} from "./components/single-user/single-user.component";
import {YourProfileComponent} from "./components/your-profile/your-profile.component";
import {FileUploadComponent} from "./components/file-upload/file-upload.component";
import {GalleryComponent} from "./components/your-profile/gallery/gallery.component";

const routes: Routes = [
  {path: "", redirectTo: "/login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "users",component: ListComponent, canActivate: [AuthenticationGuard]},
  {path: "user/:user_id", component: SingleUserComponent, canActivate: [AuthenticationGuard]},
  {path: "signup", component: SignupComponent},
  {path: "your_profile", component: YourProfileComponent, canActivate: [AuthenticationGuard]},
  {path: "**", component: NotFoundComponent, canActivate: [AuthenticationGuard]},
  {path: "upload",component:FileUploadComponent, canActivate: [AuthenticationGuard]},
  {path: "gallery",component:GalleryComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
