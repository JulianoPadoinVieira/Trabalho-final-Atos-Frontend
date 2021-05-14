import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeclasPorMinutoService {

  public ss = 0;

					public tempo = 1000;//Quantos milésimos valem 1 segundo?
					public cron;

          //Inicia o temporizador
					start() {				
						document.getElementById('parar').style.visibility = 'visible';
						document.getElementById('avancar').style.fontSize = '120px';
						//document.getElementById('proximo').style.visibility = 'visible';						
					    this.cron = setInterval(() => { this.timer(); }, this.tempo);
					    					     
					}

					//Para o temporizador mas não limpa as variáveis
					pause() {
					    clearInterval(this.cron);
					}

					//Para o temporizador e limpa as variáveis
					stop() {
					    clearInterval(this.cron);					   
					    this.ss = 0;

					    document.getElementById('avancar').innerText = '00:00:00';
					}

					//Faz a contagem do tempo e exibição
					timer() {
					     this.ss++; //Incrementa +1 na variável ss

					     //Cria uma variável com o valor tratado HH:MM:SS
					     let format = "" + this.ss; 
					    
					     //Insere o valor tratado no elemento counter
					     //document.getElementById('counter').innerText = format;
					     document.getElementById('avancar').innerText = format;

					     //Retorna o valor tratado
					     return format;
           }



					// //Inicia o temporizador
					// start() {				
					// 	document.getElementById('parar').style.visibility = 'visible';
					// 	document.getElementById('avancar').style.fontSize = '120px';
					// 	//document.getElementById('proximo').style.visibility = 'visible';						
					//     this.cron = setInterval(() => { this.timer(); }, this.tempo);
					    					     
					// }

					// //Para o temporizador mas não limpa as variáveis
					// pause() {
					//     clearInterval(this.cron);
					// }

					// //Para o temporizador e limpa as variáveis
					// stop() {
					//     clearInterval(this.cron);
					//     this.hh = 0;
					//     this.mm = 0;
					//     this.ss = 0;

					//     document.getElementById('avancar').innerText = '00:00:00';
					// }

					// //Faz a contagem do tempo e exibição
					// timer() {
					//     this.ss++; //Incrementa +1 na variável ss

					//     if (this.ss == 59) { //Verifica se deu 59 segundos
					//         this.ss = 0; //Volta os segundos para 0
					//         this.mm++; //Adiciona +1 na variável mm

					//         if (this.mm == 59) { //Verifica se deu 59 minutos
					//             this.mm = 0;//Volta os minutos para 0
					//             this.hh++;//Adiciona +1 na variável hora
					//         }
					//     }

					//     //Cria uma variável com o valor tratado HH:MM:SS
					//     let format = this.hh + ':' + this.mm+ ':' + this.ss; 
					    
					//     //Insere o valor tratado no elemento counter
					//     //document.getElementById('counter').innerText = format;
					//     document.getElementById('avancar').innerText = format;

					//     //Retorna o valor tratado
					//     return format;
          // }

  constructor() { }
}
