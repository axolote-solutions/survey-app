import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-survey-response',
  templateUrl: './survey-response.component.html',
  styleUrls: ['./survey-response.component.scss']
})
export class SurveyResponseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    return;
  }

  isLinear= true;
  onClick(form: NgForm): void {
    const json = JSON.stringify(form.value);

    console.log(json);

  }

  logoImg = "./assets/images/porTuCorazon.jpg";

}
