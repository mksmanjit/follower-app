import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './github-followers/github-followers.service';
export function tokenGetter() {
    return localStorage.getItem('token');
}
export class AppModule {
}
AppModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    AppComponent,
                    HomeComponent,
                    GithubFollowersComponent,
                    AboutComponent,
                    NavbarComponent
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
            },] },
];
//# sourceMappingURL=app.module.js.map