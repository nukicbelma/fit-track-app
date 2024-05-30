import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityTablePageComponent } from './activity-table-page/activity-table-page.component';
import { ActivityAddPageComponent } from './activity-add-page/activity-add-page.component';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'activities', component: ActivityTablePageComponent },
  { path: 'activity-add', component: ActivityAddPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'navigation-header', component: NavigationHeaderComponent },
  { path: 'home', component: HomePageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
