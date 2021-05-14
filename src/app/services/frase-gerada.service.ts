import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FraseGeradaService {

  public aleatorio = '';

  letras(tamanhoFrase){
    console.warn("letras");
    
    var letras = 'abcdefghiklmnopqrstuvwxyz ';
    this.aleatorio = '';
    for (var i = 0; i < tamanhoFrase; i++) {
        var rnum = Math.floor(Math.random() * letras.length);
        this.aleatorio += letras.substring(rnum, rnum + 1);
    };

      return this.aleatorio;
  }

  letrasNumeros(tamanhoFrase){
    console.warn("letrasNumeros");

    var letras = '0123456789ABCDEF GHIJKLMNOPQR STUVWXTZabcdefgh iklmnopqrstuvwxyz';
    this.aleatorio = '';
    for (var i = 0; i < tamanhoFrase; i++) {
        var rnum = Math.floor(Math.random() * letras.length);
        this.aleatorio += letras.substring(rnum, rnum + 1);
    };
      return this.aleatorio;

  }

  numeros(tamanhoFrase){
    console.warn("numeros");

    var letras = '0123456789';
    this.aleatorio = '';
    for (var i = 0; i < tamanhoFrase; i++) {
        var rnum = Math.floor(Math.random() * letras.length);
        this.aleatorio += letras.substring(rnum, rnum + 1);
    };
      return this.aleatorio;

  } 

  frases(){
     var frases = ["Don't let yesterday take up too much of today.",
     "The way to get started is to quit talking and begin doing.",
     "People who are crazy enough to think they can change the world, are the ones who do.",
     "Whether you think you can or think you can't, you're right.",
     "Today's accomplishments were yesterday’s impossibilities.",
     "You'll have the view of the top of the mountain that you climb.",
     "Are necessary too many years of work to succeed overnight.",
     "You should sit in meditation for twenty minutes everyday – unless you're too busy, then you should sit for an hour.",
     "Lucky is what happens when preparation finds the opportunity.",
     "People often say that motivation doesn't last. Well, neither does bathing – that’s why we recommend it daily."      
       
      
    ];
  return frases[Math.ceil(Math.random() * (frases.length - 1))];
  }

  modoHard(){
  var frasesHard = ["Pack my box with five dozen liquid diet cans or jugs.",
      "Crazy Fredericka bought many very exquisite opal jewels.",
      "Sixty zippers were quickly picked from the woven jute bag.",
      "Amazingly few discotheques provide jukeboxes.",
      "Heavy boxes perform quick waltzes and jigs.",
      "Jackdaws love my big sphinx of quartz.",
      "The five boxing wizards jump quickly.",
      "How quickly daft jumping zebras vex.",
      "Quick zephyrs blow, vexing daft Jim.",
      "Sphinx of black quartz, judge my vow.",
      "Waltz, nymph, for quick jigs vex Bud.",
      "Blowzy night-frumps vex'd Jack Q.",
      "Glum Schwartzkopf vex'd by NJ IQ.",
    ];

      // console.warn(frases[Math.ceil(Math.random() * (frases.length - 1))]);
    
      // this.getfocus();

      

      // console.warn(frases[Math.ceil(Math.random() * (frases.length - 1))]);
    
      // this.getfocus();

      return frasesHard[Math.ceil(Math.random() * (frasesHard.length - 1))];
    }
    
    // getfocus() {
    //   document.getElementById('entradaFraseGerada').focus();
    // }






  constructor( ) {}



}

  // "A única forma de multiplicar a felicidade é dividi-la com alguém"
  //     + , "Na vida, o importante não é ser, ter ou parecer. O importante é fazer, construir e desenvolver.", "Um lugar passa a ser nosso quando sabemos aonde vão dar todas as estradas.", 

// A televisão pode dar-nos muita coisa, exceto tempo para pensar.

// Enquanto as pessoas inteligentes conseguem frequentemente simplificar o que é complexo, um tolo tem mais tendência a complicar aquilo que é simples.

// Acreditar é mais fácil do que pensar. Por isso existem muito mais crentes do que pensadores.

// Se você rezar por chuva por bastante tempo, ela fatalmente cai. Se você rezar para que enxurradas se acalmem, elas fatalmente o farão. O mesmo acontece na ausência de preces. 

// O tempo é roído por vermes cotidianos. As vestes poeirentas de nossos dias, cabe a ti, juventude, sacudí-las.

// A demasiada atenção que se dedica a observar os defeitos alheios faz com que se morra sem ter tido tempo para conhecer os próprios.

// Do rio que tudo arrasta se diz violento, mas não se dizem violentas as margens que o oprimem.

// A liberdade é defendida com discursos e atacada com metralhadoras. 

// O homem nasceu livre, e em todos os lugares ele está acorrentado.

// Quando todos os especialistas estão de acordo, aí que a cautela é impresindível.

// Quem não sabe aonde quer ir, onde chegar está bom.

// Ninguém se torna tolo, até parar de fazer perguntas.

// O problema de ser pontual é que não há ninguém lá para elogiar você.

// Precisamos decidir como podemos ser valiosos, em vez de pensar em quão valiosos somos.

// Odeio a televisão tanto quanto odeio amendoins. Mas não consigo parar de comê-los. 

// Estranhem o que não for estranho.Tomem por inexpicável o habitual.Sintam-se perplexos ante o cotidiano. 

// Procura-se o dono da loucura não para matá-la, mas para perguntar se ele sobreviveu. 

// O ódio é, de longe, o prazer que dura mais. Os homens amam depressa, mas detestam devagar. 

// O único tirano que aceito neste mundo é a voz silenciosa dentro de mim, a consciência.

// É fundamental saber que intençao cada pessoa tem em mente para poder decidir até onde confiar nela.

// A confiança dá à conversa mais conteúdo do que a inteligência. 

// Não pense no custo de fazer algo; pense no custo de não fazer nada!

