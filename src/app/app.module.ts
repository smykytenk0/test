import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatsComponent } from './stats-component/stats.component';
import { HomepageComponent } from './homepage/homepage.component';

const appRoutes: Routes = [
  {path:'stats', component: StatsComponent}
  {path:'homepage', component: HomepageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
