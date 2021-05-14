import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TotalDigitadasService {

  //Propriedade que liga o html ao ts
  public teclasDigitadas: string;

  public numero = 0;
  public aux = 0;

  totalDigitadas(numero){
      //Condição caso seja limpo a palavra digitada
      if(numero > 0 ){
        this.numero = this.numero + numero;
      } else {
        this.numero = 0;
      }
    return this.numero.toString();
  }

 

  constructor() { }
}
