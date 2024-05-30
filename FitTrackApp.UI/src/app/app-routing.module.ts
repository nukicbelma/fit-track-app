import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityTablePageComponent } from './activity-table-page/activity-table-page.component';
import { ActivityAddPageComponent } from './activity-add-page/activity-add-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/activities', pathMatch: 'full' },
  { path: 'activities', component: ActivityTablePageComponent },
  { path: 'activity-add', component: ActivityAddPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
