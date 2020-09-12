import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-vertical',
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.scss']
})
export class VerticalComponent implements OnInit {

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

}
