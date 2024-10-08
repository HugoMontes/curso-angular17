import { formatCurrency, getLocaleCurrencySymbol } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency',
  standalone: true,
})
export class CustomCurrencyPipe implements PipeTransform {
  
  transform(value: number, digistInfo?: string): unknown {
    const localeCurrencySymbol = getLocaleCurrencySymbol('es-BO')!;
    const digist = digistInfo ? digistInfo : '.2-2';
    return formatCurrency(value, 'es_BO', localeCurrencySymbol, 'BOB', digist);
  }
}
