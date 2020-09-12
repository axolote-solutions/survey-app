import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { SurveyResponseComponent } from './survey-response/survey-response.component';
import { VerticalComponent } from './vertical/vertical.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'home/surveyResponse', component: SurveyResponseComponent},
  { path: 'vertical', component: VerticalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
