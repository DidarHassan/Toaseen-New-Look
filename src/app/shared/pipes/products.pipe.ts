import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'products',
  standalone: true
})
export class ProductsPipe implements PipeTransform {

  transform(value: any[], filterString: string, propName: string): any[] {
    const result: any = [];
    if (!value || filterString ==='' || propName ===''){
      return value;
    }
    for (const item of value){
      if (item[propName] === filterString){
        result.push(item)
      }
    }
    return result;
  }
}


