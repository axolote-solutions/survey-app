import { Component, OnInit, SkipSelf, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-gad',
  templateUrl: './gad.component.html',
  styleUrls: ['./gad.component.scss'],
  viewProviders: [{
    provide: ControlContainer,
    useFactory: (container: ControlContainer) => container,
    deps: [[new SkipSelf(), ControlContainer]],
  }]
})
export class GadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() modelGroupName: string;

  answers: string[] = ['Para nada','Varios días','Más de la mitad de los días','Casi todo los días'];

}
