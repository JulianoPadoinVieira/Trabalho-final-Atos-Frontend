import { Component, OnInit } from '@angular/core';
import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms'; //FormBuilder
import { FormsModule }   from '@angular/forms';

import { TotalDigitadasService } from '../services/total-digitadas.service';
import { FraseGeradaService } from '../services/frase-gerada.service';
import { TeclasPorMinutoService } from '../services/teclas-por-minuto.service'
import { TemporizadorService } from '../services/temporizador.service';

import { HostListener } from '@angular/core';

@Component({
  selector: 'app-digitacao',
  templateUrl: './digitacao.component.html',
  styleUrls: ['./digitacao.component.css']
})
export class DigitacaoComponent implements OnInit {
   
  public teclasDigitadas = 0;
  public letrasCertas = 0;
  public posicaoCaracter = 1;
  public acertos = 0;
  public teclasDigitadasHistorico;
  public acertosHistorico;
  public fraseTotal = "";
  public botaoIniciar = "Frase";
  public tempoCorridoHistorico;

  caracteresDigitados(event: KeyboardEvent, entradaDados: string, entradaFraseGerada: string) {
    
    let fraseGeradaAux = document.getElementById('entradaDados')["value"];
    let entradaDadosAux = document.getElementById('entradaFraseGerada')["value"];
    
    // if(entradaDadosAux.length > 0){
    //   this.cronometro("começar");
    // }

    if(event.code != 'ControlLeft' 
      && event.code != 'Backspace' 
      && event.code != 'ShiftLeft' 
      && event.code != 'Tab' 
      && event.code != 'Delete' 
      && event.code != 'CapsLock' 
      && event.code != 'Shift' ) {
        this.fraseTotal += event.key;
      }

    if(event.code != 'Tab' ) {       
      this.teclasDigitadas++;
      console.warn("Aa " + document.getElementById('entradaDados')["value"].length);
      console.warn("Bb " + this.teclasDigitadas);
      // console.warn(this.teclasDigitadas);
      if(document.getElementById('entradaDados')["value"].length == 1 && this.teclasDigitadas == 1) {

          this.cronometro("parar");        
          this.cronometro("começar");          
      }       
    } 

    //Verificar se os caracteres são iguais
    if(entradaDados.slice(0, this.posicaoCaracter) == entradaFraseGerada.slice(0, this.posicaoCaracter)      
      && entradaDados != '' && entradaDados != null){

        // console.warn("Letras iguais, Nº" + this.acertos);     

      if(entradaFraseGerada.length != entradaDados.length) {
        
        this.posicaoCaracter++; 
        if(event.code != 'Backspace' ) {
        this.acertos++;
        } 
      
      }
      //Verificar se as palavras são iguais    
      else if (entradaDados["value"] == entradaFraseGerada["value"] && entradaDados != '' && entradaDados != null
              && entradaDadosAux.charAt(entradaDadosAux.length -1) 
              == fraseGeradaAux.charAt(fraseGeradaAux.length -1)){

        console.warn("Palavras iguais!");

        if(event.code != 'Backspace' ) {
        this.acertos++;
        }

        this.tempoCorridoHistorico = this.temporizadorService.format;
        this.cronometro("parar");

        alert("N acertos: " + this.acertos  
             + "\nTotal digitado: " + this.teclasDigitadas 
             + "\nFrase digitada: " + this.fraseTotal);
            



        //Carrega o último valor das teclas digitadas antes de zerar
        this.teclasDigitadasHistorico = this.teclasDigitadas;
        //Carrega o último valor das teclas ceertas antes de zerar
        this.acertosHistorico = this.acertos;

        

        this.fraseTotal = "";

        //Zera os campos
        document.getElementById('entradaDados')["value"] = null;   
        document.getElementById('entradaFraseGerada')["value"] = null;
        this.focusFraseGerada();

        //Zera as teclas digitadas
        this.teclasDigitadas = 0;  
        //Zera os acertos
        this.acertos = 0; 

        this.posicaoCaracter = 0;   
      } 

      //Zera os acertos se as teclas digitadas forem <= 0
      if(this.teclasDigitadas < 0){        
        this.acertos = 0;
      }

    }

    console.log("Letra digitada: " + event.key);

    if(event.key != null && event.key != ''){
      if(event.code == 'Space' ) {       
        this.teclaDigitada('Space');
      }
      else if(event.code == 'ControlLeft' ) {       
        this.teclaDigitada('ControlLeft');
      } 
      else if(event.code == 'Backspace' ) {       
        this.teclaDigitada('Backspace');
      } 
      else if(event.code == 'ShiftLeft' ) {       
        this.teclaDigitada('ShiftLeft');
      }
      else if(event.code == 'Tab' ) {       
        // this.teclaDigitada('Tab');
      }
      else if(event.code == 'Delete' ) {
        //Ignora o "Delete" por não estar no teclado
      }
      else if(event.code == 'CapsLock' ) {       
        this.teclaDigitada('CapsLock');
      } else {
        this.teclaDigitada(event.key.toLowerCase());
      }
    }     
    
    console.log(event);
  }

 cronometro(parametro: string){

    if(parametro == "começar") {
      this.temporizadorService.stop();
      this.temporizadorService.start();
      // console.warn(parametro);
      
    }
    else if(parametro == "pausar") {
      this.temporizadorService.pause();

      // console.warn(parametro);

    }
    else if(parametro == "parar") {
      this.temporizadorService.stop();
      // console.warn(parametro);
    }  

  }

  

  focusFraseGerada() {
    document.getElementById('entradaFraseGerada').focus();
  }

  focusEntradaDados() {
    document.getElementById('entradaDados').focus();
    this.limparCampos();
  }

  teste(frase: string, fraseNoCampoTextoGerado: string): void{
    // var a = 'a';
    // var b = 'b';
    // a = document.getElementById('tAreaTextoGerado').innerHTML;
    // b = document.getElementById('tAreaTextoDigitado').innerHTML;

    console.log("dentro do teste, fora do if");
    console.log("..." + frase);
    console.log("..." + fraseNoCampoTextoGerado);
    
    if(frase === fraseNoCampoTextoGerado && frase != '' && frase != null ){   
      
      document.getElementById('entradaFraseGerada')["value"] = '';
      document.getElementById('entradaDados')["value"] = ''; 
    }


    
    // document.getElementById('tAreaTextoDigitado').innerHTML = null;
  }

  //Função que muda a cor de fundo das teclas
  teclaDigitada(letra: string): void{    

    var intervalo = window.setInterval(function() {}, 3000);  
    window.setTimeout(function() {    
    clearInterval(intervalo);
    if(letra != null){
      document.getElementById(letra).style.backgroundColor = '#555';
      //document.getElementById(letra).style.color = 'white';
    }
    }, 600);
    if(letra != null){
      document.getElementById(letra).style.backgroundColor = 'white';
      //document.getElementById(letra).style.color = 'black';
    }
  }

  selectedState: any;

  statename = "Letras";

  shopstates = [{
      statename: "Letras"
    },
    {
      statename: "Números"
    },
    {
      statename: "Letras/Números"
    },
    {
      statename: "Modo Hard"
    }
  ];


  tipoCaracter(statename:any): string{
        this.selectedState = statename;
        // console.log('curent state is ' + this.selectedState);
        return this.selectedState
  }  

  

  textoGerado(tamanhoFrase: number): void {

    this.focusEntradaDados();
    this.limparCampos();


    if(document.getElementById('entradaDados')["value"].length == 1 && this.teclasDigitadas == 1) {
                   
      this.cronometro("começar");          
    } 

    if(document.getElementById('tamanho')["value"] > 0 && this.selectedState != 'Modo Hard') { 

      document.getElementById('entradaFraseGerada')["value"] = '';

      if(this.selectedState == 'Números') {
        document.getElementById('entradaFraseGerada')["value"] = this.fraseGerada.numeros(tamanhoFrase);
      } else if (this.selectedState == 'Letras/Números'){
        document.getElementById('entradaFraseGerada')["value"] = this.fraseGerada.letrasNumeros(tamanhoFrase);
      } else {
        document.getElementById('entradaFraseGerada')["value"] = this.fraseGerada.letras(tamanhoFrase);
      }
    }  
    else {
      if(this.selectedState == 'Modo Hard') {
        document.getElementById('entradaFraseGerada')["value"] = this.fraseGerada.modoHard();
      } else {
        document.getElementById('entradaFraseGerada')["value"] = this.fraseGerada.frases();
      }
    }

    this.cronometro("parar");
    
  }

  limparCampos(){

    document.getElementById('entradaDados')["value"] = null;
    this.teclasDigitadas = 0;


  }



  letrasNumeros() {
    if(document.getElementById('tamanho')["value"] != null 
      && document.getElementById('tamanho')["value"] > 0){
        this.botaoIniciar = "Iniciar";
        // console.warn("Aquiii " + document.getElementById('tamanho')["value"]);
        document.getElementById('tamanho')["text"] = "Iniciar";
        console.warn("T maior 0 = " + document.getElementById('tamanho')["value"]);
        
    } else {
        this.botaoIniciar = "Frase";
        console.warn("T  = " + document.getElementById('tamanho')["value"]);
    }

  }



  constructor(private totalDigitadas: TotalDigitadasService, 
              private fraseGerada: FraseGeradaService,
              private teclasPorMinuto: TeclasPorMinutoService,
              private temporizadorService: TemporizadorService) {
  }  

  ngOnInit() {
    
    document.getElementById('entradaFraseGerada')["value"] = null;
    document.getElementById('entradaDados')["value"] = null;
    

  }   

  //Cronômetro em javascript
  // var hh = 0;
	// 				var mm = 0;
	// 				var ss = 0;

	// 				var tempo = 1000;//Quantos milésimos valem 1 segundo?
	// 				var cron;

	// 				//Inicia o temporizador
	// 				function start() {				
	// 					document.getElementById('parar').style.visibility = 'visible';
	// 					document.getElementById('avancar').style.fontSize = '120px';
	// 					//document.getElementById('proximo').style.visibility = 'visible';						
	// 				    cron = setInterval(() => { timer(); }, tempo);
					    					     
	// 				}

	// 				//Para o temporizador mas não limpa as variáveis
	// 				function pause() {
	// 				    clearInterval(cron);
	// 				}

	// 				//Para o temporizador e limpa as variáveis
	// 				function stop() {
	// 				    clearInterval(cron);
	// 				    hh = 0;
	// 				    mm = 0;
	// 				    ss = 0;

	// 				    document.getElementById('avancar').innerText = '00:00:00';
	// 				}

					//Faz a contagem do tempo e exibição
					// function timer() {
					//     ss++; //Incrementa +1 na variável ss

					//     if (ss == 59) { //Verifica se deu 59 segundos
					//         ss = 0; //Volta os segundos para 0
					//         mm++; //Adiciona +1 na variável mm

					//         if (mm == 59) { //Verifica se deu 59 minutos
					//             mm = 0;//Volta os minutos para 0
					//             hh++;//Adiciona +1 na variável hora
					//         }
					//     }

					//     //Cria uma variável com o valor tratado HH:MM:SS
					//     var format = (hh &lt; 10 ? '0' + hh : hh) + ':' + (mm &lt; 10 ? '0' + mm : mm) + ':' + (ss &lt; 10 ? '0' + ss : ss);
					    
					//     //Insere o valor tratado no elemento counter
					//     //document.getElementById('counter').innerText = format;
					//     document.getElementById('avancar').innerText = format;

					//     //Retorna o valor tratado
					//     return format;
					// } 

}
