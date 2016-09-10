import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [
    appRoutingProviders
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
