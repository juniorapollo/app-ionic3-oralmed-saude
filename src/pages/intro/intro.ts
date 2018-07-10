import { HomePage } from './../home/home';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slide, Slides, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';



@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  mostrarIntro = {
    true:  true,
    false: false
  };  

  slides = [
    {
      title: "Bem Vindo!",
      description: "O <b>APP Oralmed</b> veio para otimizar o SEU tempo e facilitar a sua busca pelo especialista que você precisa! ",
      image: "assets/img/logo/logo_oralmed.png",
    },
    {
      title: "O que é a <b>ORALMED</b>?",
      description: "A <b>ORALMED</b> é uma operadora de Planos Odontológicos de iniciativa privada, que atua em Londrina desde 1994, devidamente registrada junto à ANS – Agência Nacional de Saúde Suplementar, sob o nº 33.362-0. <br>É a única que possui Centro Odontológico Especializado próprio, planejado e construído para este fim, atendendo todas as normas da vigilância sanitária e biossegurança.",
      image: "assets/img/logo/logo_oralmed.png",
    },
    {
      title: "Nossa História!",
      description: "Em 1998, ano de criação da Lei 9656/98, que regulamenta o setor de planos privados de assistência à saúde, a ORALMED passou a ser regulamentada a partir de sua inscrição junto à ANS – Agência Nacional de Saúde Suplementar.<br> Sempre atuando de forma ética e pioneira, em 1996 inovou ao unir em uma só estrutura a administração do Plano Odontológico e o atendimento aos clientes em um só local. Nascia o Centro Odontológico Especializado.",
      image: "assets/img/logo/logo_oralmed.png",
    }
  ];

  constructor(
    public alertCtrl: AlertController,
    public navCtrl:   NavController, 
    public navParams: NavParams) 
  {
  }

  ionViewDidLoad() {
  
    console.log('ionViewDidLoad IntroPage');
  }

  // Slider methods
  @ViewChild('slider') slider: Slides;
  @ViewChild('innerSlider') innerSlider: Slides;

  slideNext() {
    this.innerSlider.slideNext();
  }

  gotoIniciar(){
    if(!localStorage.getItem('principal')){
      this.navCtrl.setRoot(LoginPage);
    }else{
      this.navCtrl.setRoot(HomePage);
    }
    
  }

  cancelIntro() {
    const alert = this.alertCtrl.create({
      title: 'Não Mostrar Intro Novamente?',
      message: 'A página de introdućão não será mostrada novamente.',
      buttons: [
        {
          text: 'Voltar',
          handler: () => {
          }
        },
        {
          text: 'OK',
          handler: () => {
            localStorage.setItem('intro', JSON.stringify(this.mostrarIntro.false));
            console.log(localStorage.getItem('intro'));
            this.gotoIniciar();
          }
        }
      ]
    });
    
    alert.present();
  }

}
