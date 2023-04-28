import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import {AuthguardService} from "./authguard.service";
import { SingleUserComponent } from './single-user/single-user.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NotFoundComponent,
    LoginComponent,
    ListComponent,
    SingleUserComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
