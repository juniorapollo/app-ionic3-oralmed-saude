import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 


  cards = [
    {
      imageUrl: 'assets/img/background/background-1.jpg',
      title: 'ORALMED Planos Odontológicos',
      description: 'Nossos profissionais possuem amplo know-how e experiência para realizar projetos de alta qualidade. Investimos em conhecimento técnico e inovação, agregando valor e formando um grupo sólido e comprometido..'
    }
    ];
  constructor(public navCtrl: NavController) {
    
    
  }

  cardTapped(card) {
    alert(card.title + ' was tapped.');
  }

  agendar(card) {
    alert(card.title + ' Agendar');
  }

  contato(card) {
    alert('Contatos de ' + card.title);
  }

  

}
