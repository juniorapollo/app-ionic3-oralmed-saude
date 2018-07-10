import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-profissional-profile',
  templateUrl: 'profissional-profile.html',
})
export class ProfissionalProfilePage {

  selectedItem: any;
  user = {
    name: 'Daniel Junior',
    profileImage: 'assets/img/avatar/girl-avatar.png',
    coverImage: 'assets/img/background/background-5.jpg',
    occupation: 'Desenvolvedor',
    location: 'Londrina, PR',
    description: 'Apaixonado por tecnologia. Recentemente, com foco no desenvolvimento de aplicativos híbridos móveis e desenvolvimento web.',
    address: 'PioXII n 856, Londrina-PR , BR',
    phone: '(43) 3333-3333',
    email: 'daniel.a.junior@hotmail.com',
    whatsapp: '(43) 9 8476-4050',
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');
   
  }

  ionViewDidLoad() {
    console.log(this.selectedItem);
  }

  abrirAgenda(profissional:string){
    alert("Abrir Pagina para Efetuar Agendamento para " + profissional );
  }

}
