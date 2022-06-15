import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  
  static readonly SUM: string = '+';
  static readonly SUB: string = '-';
  static readonly DIV: string = '/';
  static readonly MULT: string = '*';

  constructor() { }

  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number;

    switch (operacao) {
      case CalculadoraService.SUM:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUB:
        resultado = num1 - num2;
        break;
      case CalculadoraService.DIV:
        resultado = num1 / num2;
        break;
      case CalculadoraService.MULT:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
    }
    return resultado;
  }
}
