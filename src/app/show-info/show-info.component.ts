import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-show-info',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, LowerCasePipe, UpperCasePipe, DecimalPipe, NgFor],
  templateUrl: './show-info.component.html',
  styleUrl: './show-info.component.scss'
})
export class ShowInfoComponent {
  personas = [
    {
      nombre: 'Juan',
      apellido: 'Gonzales',
      fechaNacimiento: '1990-05-15',
      salario: 50000.25,
      montoDecimal: 456.789012
    },
    {
      nombre: 'Maria',
      apellido: 'Gonzales',
      fechaNacimiento: '1985-08-22',
      salario: 72000.75,
      montoDecimal: 987.654321
    },
    {
      nombre: 'Carlos',
      apellido: 'Rodriguez',
      fechaNacimiento: '1995-03-10',
      salario: 60000.5,
      montoDecimal: 123.456789
    }
  ];
}
