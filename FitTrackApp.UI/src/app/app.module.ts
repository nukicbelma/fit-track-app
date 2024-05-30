import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivityTablePageComponent } from './activity-table-page/activity-table-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ActivityAddPageComponent } from './activity-add-page/activity-add-page.component';
import { ActivityService } from './services/activity/activity.service';
import { provideRouter } from '@angular/router';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivityTablePageComponent,
    ActivityAddPageComponent,
    NavigationHeaderComponent,
    AboutPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ActivityService, provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
