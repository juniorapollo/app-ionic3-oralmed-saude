import { ProfissionalProfilePage } from './../profissional-profile/profissional-profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the ProfissionalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profissional',
  templateUrl: 'profissional.html',
})
export class ProfissionalPage {
  
  searchQuery: string = '';
  profissionais: string[];
  selectedItem: any;

  especialidade: string[];
  
  constructor(platform: Platform,public navCtrl: NavController, public navParams: NavParams) {
   
    this.selectedItem = navParams.get('item');
    
  }

  ionViewDidLoad() {
    this.initializeProfissional();
  }

  initializeProfissional(){
    
    return this.profissionais = [
      'Dr  Caroline Bombardi',
      'Dr  Luiza Maria Mendes Leme',
      'Dr  Melquisedec Rici Boscoli',
      'Dr  Alexandre Jorge Ikuta',
      'Dra Carol Cury',
      'Dra Edna Canteri',
      'Dr  Leandro Marques Panagio',
      'Dr  Marcio Shimomura',
      'Dr  Melquisedec Rici Boscoli',
      'Dr  Rodrigo Veronesi',
      'Dr  Willian Ricardo Pires',
      'Dr  Bruno Corá',
      'Dra Mayara Delfino Sentone',
      'Dra Amanda O. Colem Leme',
      'Dra Ana Paula Bueno ',
      
    ];
  }
 
  

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeProfissional();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.profissionais = this.profissionais.filter((profissionais) => {
        return (profissionais.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


  abrirProfissional(event,item){
    this.navCtrl.push(ProfissionalProfilePage,{
      item:item
    });
  }
}
