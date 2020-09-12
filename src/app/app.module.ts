import { BrowserModule } from '@angular/platform-browser';
/* import { NgModule } from '@angular/core'; */

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { SurveyResponseComponent } from './survey-response/survey-response.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PersonalComponent } from './personal/personal.component';
import { GadComponent } from './gad/gad.component';
import { FormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { HabitsComponent } from './habits/habits.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { VerticalComponent } from './vertical/vertical.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SurveyResponseComponent,
    PersonalComponent,
    GadComponent,
    HabitsComponent,
    VerticalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatGridListModule,
    MatCardModule,
    FormsModule,
    MatStepperModule,
    MatTabsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
