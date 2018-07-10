import { ProfissionalPage } from './../profissional/profissional';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-especialidade',
  templateUrl: 'especialidade.html',
})
export class EspecialidadePage {

  searchQuery: string = '';
  items: string[];
  selectedItem: any;
  especialidade: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    
  }

  ionViewDidLoad() {
    this.initializeEspecialidades();

  }

  initializeEspecialidades() {
    this.especialidade = [
      'Cirurgia',
      'Clínica Geral',
      'Endodontia',
      'Implante',
      'Odontopediatria/Odontologia para Bebês',
      'Ortodontia',
      'Periodontia',
      'Prótese'
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeEspecialidades();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.especialidade = this.especialidade.filter((especialidade) => {
        return (especialidade.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


  abrirProfissional(event, item) {
    
    this.navCtrl.push(ProfissionalPage, {
      item: item
    });
  }
}
