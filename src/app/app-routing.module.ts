import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SurveyResponseComponent } from './survey-response/survey-response.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'home/surveyResponse', component: SurveyResponseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
