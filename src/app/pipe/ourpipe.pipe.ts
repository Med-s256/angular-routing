import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ourpipe'
})
export class OurpipePipe implements PipeTransform {

  transform(items: any[], filterdata: string): any {
    if(!items) return [];
    if(!filterdata) return items;
     filterdata = filterdata.toString().toLowerCase();
    //  filterid = filterid.valueOf();
     return items.filter( it => {
     return it.fname.toString().includes(filterdata) || it.id.toString().includes(filterdata) ;
      });
      }


}

