import { Component, OnInit, SkipSelf, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.scss'],
  viewProviders: [{
    provide: ControlContainer,
    useFactory: (container: ControlContainer) => container,
    deps: [[new SkipSelf(), ControlContainer]],
  }]
})
export class HabitsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() modelGroupName: string;

  facemasks: string[] = [
    'Siempre, cuando hablo con cualquier persona, que no vive conmigo',
    'Siempre al salir de casa',
    'Ocasionalmente los uso',
    'No lo uso regularmente'
  ];

  times: string[] = [
    'Siempre',
    '3 de 4 veces',
    '2 de 4 veces',
    '1 de 4 veces',
    'Nunca'
  ];

  tapetes: string[] = [
    'Ambos y los uso',
    '1 de los 2 y lo uso',
    'Ninguno',
    '1 de los 2 y no lo uso',
    'Ambos y no los uso'
  ];

  reuniones: string[] = [
    'Nunca',
    '1 vez al mes',
    '1 vez cada Semana',
    'Más de 2 veces por semana',
    'No aplica'
  ];

  asistencias: string[] = [
    'Ambos y los uso',
    '1 de los 2 y lo uso',
    'Ninguno',
    '1 de los 2 y no lo uso',
    'Ambos y no los uso',
    'No aplica'
  ];

  selectedReunion: string = 'Nunca';
  

  handleReunion(selectedReunion: string): void {
    this.selectedReunion = selectedReunion;
    
  }
  

}
