import { PipeTransform, Injectable } from '@nestjs/common';

@Injectable()
export class CurrencyPipe implements PipeTransform {
  transform(value: number, currencyCode: string = 'USD', display: string = 'symbol', digitsInfo: string = '1.2-2'): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: parseInt(digitsInfo.split('-')[0]),
      maximumFractionDigits: parseInt(digitsInfo.split('-')[1]),
    }).format(value);
  }
}
