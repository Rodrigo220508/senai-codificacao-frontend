import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculadora  } from './calculadora/calculadora';

@Component({
  imports: [RouterOutlet, Calculadora],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('calculadora');
}
