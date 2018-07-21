import { HttpClientModule } from '@angular/common/http';



import { ErrorHandler, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NotExpr } from '@angular/compiler';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './github-followers/github-followers.service';
import { CoursesComponent } from './courses/courses.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GithubFollowersComponent,
    AboutComponent,
    NavbarComponent,
    CoursesComponent
  ],
  imports: [
        BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'followers', component: GithubFollowersComponent }
    ])
  ],
  providers: [
   GithubFollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
