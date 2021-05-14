import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemporizadorService {

  public hh = 0;
	public mm = 0;
	public ss = 0;

	public tempo = 17;//Quantos milésimos valem 1 segundo?
	public cron = 0;
  public format;

  public tempoCorridoHistorico;

					//Inicia o temporizador
		start() {
			// if(this.tempo == 0){      
				this.cron = setInterval(() => { this.timer(); }, this.tempo);
        console.warn("Temp começar");        
							    					     
		}

		//Para o temporizador mas não limpa as variáveis
		pause() {
			clearInterval(this.cron);
      console.warn("Temp pausar");
		}

		//Para o temporizador e limpa as variáveis
		stop() {
			clearInterval(this.cron);
			this.hh = 0;
			this.mm = 0;
			this.ss = 0;
      document.getElementById('tempoCorrido')['value'] = "00:00:00";
      // console.warn("Temp parar");

			// document.getElementById('avancar').innerText = '00:00:00';
		}

		//Faz a contagem do tempo e exibição
		timer() {
			this.ss++; //Incrementa +1 na variável ss

			if (this.ss == 59) { //Verifica se deu 59 segundos
					this.ss = 0; //Volta os segundos para 0
					this.mm++; //Adiciona +1 na variável mm

				if (this.mm == 59) { //Verifica se deu 59 minutos
					this.mm = 0;//Volta os minutos para 0
					this.hh++;//Adiciona +1 na variável hora
				}
			}

			//Cria uma variável com o valor tratado HH:MM:SS
			this.format = (this.hh < 10 ? '0' + this.hh :  this.hh) + ':' + (this.mm < 10 ? '0' + this.mm : this.mm) + ':' + (this.ss < 10 ? '0' + this.ss : this.ss);
					    
			//Insere o valor tratado no elemento counter
			//document.getElementById('counter').innerText = format;
			// document.getElementById('avancar').innerText = format;

			//Retorna o valor tratado

         
      
				return document.getElementById('tempoCorrido')['value'] = this.format;
			}

  constructor() { }
}
