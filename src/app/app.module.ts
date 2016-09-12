import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, RequestOptions } from '@angular/http';

import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostComponent } from './components/post/post.component';
import {HeaderService} from "./services/header/header.service";
import {Auth} from "./services/auth/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavBarComponent,
    PostListComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [
    appRoutingProviders,
    HeaderService,
    Auth
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
