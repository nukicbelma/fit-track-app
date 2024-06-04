import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityTablePageComponent } from './activity-table-page/activity-table-page.component';
import { ActivityAddPageComponent } from './activity-add-page/activity-add-page.component';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GoalTablePageComponent } from './goal-table-page/goal-table-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { GoalAddPageComponent } from './goal-add-page/goal-add-page.component';
import { ActivityEditPageComponent } from './activity-edit-page/activity-edit-page.component';
import { GoalEditPageComponent } from './goal-edit-page/goal-edit-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'activities', component: ActivityTablePageComponent },
  { path: 'activity-add', component: ActivityAddPageComponent },
  { path: 'activity-edit/:id', component: ActivityEditPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'navigation-header', component: NavigationHeaderComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'goals', component: GoalTablePageComponent },
  { path: 'goal-add', component: GoalAddPageComponent },
  { path: 'goal-edit/:id', component: GoalEditPageComponent },
  { path: 'logout', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
