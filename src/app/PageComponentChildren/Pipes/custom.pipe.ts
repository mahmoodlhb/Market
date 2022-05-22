import { Pipe, PipeTransform } from '@angular/core';
import {Observable} from "rxjs";

@Pipe({
  name: 'custom'
})
export class CustomPipe<T> implements PipeTransform {

  private formattedValue: T | undefined;

  constructor( ) {
  }

  transform(value: Observable<T>):any {
    return this._returnAsyncValue(value)

  }

  private  _returnAsyncValue(value:Observable<T>){

    value.subscribe((result)=>{
      this.formattedValue=result;
    })
    return this.formattedValue;


  }



}
