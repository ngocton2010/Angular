import { Pipe, PipeTransform } from '@angular/core';
import { Manufacture } from 'src/app/shared/manufacture/manufacture.model';

@Pipe({
  name: 'searchManuFature'
})
export class SearchManuFaturePipe implements PipeTransform {

  transform(ManuFactures : Manufacture[],searchValue_Manu:string): Manufacture[] {
    if(!ManuFactures || !searchValue_Manu){
      return ManuFactures;
    }
    return ManuFactures.filter(ManuFacture => 
      ManuFacture.tenNCC.toLocaleLowerCase().includes(searchValue_Manu.toLocaleLowerCase())|| 
      ManuFacture.email.toLocaleLowerCase().includes(searchValue_Manu.toLocaleLowerCase()));
  }
}
