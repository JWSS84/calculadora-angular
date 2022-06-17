import { inject, TestBed } from '@angular/core/testing';
import { CalculadoraService } from './calculadora.service';
/**
 * Realizar testes unitários no service
 * testar as operações básicas e entradas inválidas
 */
describe('CalculadoraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[CalculadoraService]
    });
  });
  it('should ...', inject([CalculadoraService],
     (service: CalculadoraService) => {
    expect(service).toBeTruthy();
  }));

  it('deve garantir que 1 + 4 = 5',
  inject ([CalculadoraService],(service: CalculadoraService) => {
    let soma = service.calcular(1,4, CalculadoraService.SUM);
    expect(soma).toEqual(5)

  }));
  it('deve garantir que 1 - 4 = -3',
  inject ([CalculadoraService],(service: CalculadoraService) => {
    let subtracao = service.calcular(1,4, CalculadoraService.SUB);
    expect(subtracao).toEqual(-3)

  }));
  it('deve garantir que 1 / 4 = 0.25',
  inject ([CalculadoraService],(service: CalculadoraService) => {
    let divisao = service.calcular(1,4, CalculadoraService.DIV);
    expect(divisao).toEqual(0.25)

  }));
  it('deve garantir que 1 * 4 = 4',
  inject ([CalculadoraService],(service: CalculadoraService) => {
    let multiplica = service.calcular(1,4, CalculadoraService.MULT);
    expect(multiplica).toEqual(4)

  }));
  it('deve retornar 0 se for operação inválida',
  inject ([CalculadoraService],(service: CalculadoraService) => {
    let opInvalid = service.calcular(1, 4, '%');
    expect(opInvalid).toEqual(0)

  }));
});
