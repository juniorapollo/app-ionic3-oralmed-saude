import { Component,Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})

export class AgendaPage {

  selectedItem: any;
  horario: string[];
  profissional: string[];
  items: Array<{title: string, profissional: string, horario: string}>;

  constructor(
    public navCtrl:   NavController, 
    public navParams: NavParams,
) {

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.horario = ['8:00','9:00','10:30','14:00','15:00','17:00'];
    

    this.items = [];
    for (let i = 1; i < 20; i++) {
      this.items.push({
        title: 'Profissional ' + i,
        profissional: 'Especialidade' + i,
        horario: this.horario[Math.floor(Math.random() * this.horario.length)]
      });
    }

}

itemTapped(event, item) {
  // That's right, we're pushing to ourselves!
  this.navCtrl.push(AgendaPage, {
    item: item
  });
}

  
}
