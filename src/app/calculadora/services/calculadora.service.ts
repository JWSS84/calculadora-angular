/**
 * Serviço que será responsável por executar as
 * operações da calculadora
 *
 * @author Jarbas Somonet<jarbaswssilva@gmail.com>
 * @since 1.0.0
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  /* Define as constantes e identifica as operações
  de cálculo */
  static readonly SUM: string = '+';
  static readonly SUB: string = '-';
  static readonly DIV: string = '/';
  static readonly MULT: string = '*';

  constructor() { }
  /**
   * Método que calcula uma operação matematica
   * dado dois números.
   * Operações: soma, subtração, divisão e multiplicação.
   *
   * @param num1 number
   * @param num2 number
   * @param operacao string, Operação a ser executada
   * @returns number, Resultado da operação
   */

  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number;// armazena o resultado da operação

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
