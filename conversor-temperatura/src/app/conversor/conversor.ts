import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conversor',
  imports: [FormsModule, CommonModule],
  templateUrl: './conversor.html',
  styleUrl: './conversor.css'
})
export class Conversor {

  valor: number = 0;
  resultado: number = 0;
  mensagemErro: string = '';
  calculado: boolean = false;

  paraFahrenheit() {
    this.resultado = this.valor * 9 / 5 + 32;
    this.calculado = true;
  }

  paraReaumur() {
    this.resultado = this.valor * 4 / 5;
    this.calculado = true;
  }

  paraKelvin() {
    if (this.valor < -273.15) {
      this.mensagemErro = 'Temperatura abaixo do zero absoluto!';
      this.calculado = false;
      return;
    }

    this.mensagemErro = '';
    this.resultado = this.valor + 273.15;
    this.calculado = true;
  }

  limpar() {
    this.valor = 0;
    this.resultado = 0;
    this.calculado = false;
    this.mensagemErro = '';
  }

}
