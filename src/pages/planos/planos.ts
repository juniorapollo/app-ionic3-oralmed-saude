import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-planos',
  templateUrl: 'planos.html',
})
export class PlanosPage {
  planos: string = "individuais";

  individual = [
    {
      imageUrl: 'assets/img/planos/individual.jpg',
      title: 'Plano Individual',
      description: 'As pessoas estão cada vez mais aderindo aos Planos Odontológicos devido ao alto custo dos tratamentos particulares e a carência de serviços públicos quem venham suprir esta necessidade. Também a população tem se conscientizado da importância de se manter a boca saudável e do bem estar que isso proporciona ao indivíduo. Assim a ORALMED se coloca como uma excelente opção para lhe oferecer um Plano Odontológico de qualidade, com agilidade no atendimento e de forma a facilitar sua vida, oferecendo-lhe todos os serviços num só local.'
    }
    ];

    familiar = [
      {
        imageUrl: 'assets/img/planos/familiar.jpg',
        title: 'Plano Familiar',
        description: 'As pessoas estão cada vez mais aderindo aos Planos Odontológicos devido ao alto custo dos tratamentos particulares e a carência de serviços públicos quem venham suprir esta necessidade. Também a população tem se conscientizado da importância de se manter a boca saudável e do bem estar que isso proporciona ao indivíduo. Assim a ORALMED se coloca como uma excelente opção para lhe oferecer um Plano Odontológico de qualidade, com agilidade no atendimento e de forma a facilitar sua vida, oferecendo-lhe todos os serviços num só local.'
      }
      ];

      empresarial = [
        {
          imageUrl: 'assets/img/planos/empresarial.jpg',
          title: 'Plano Empresarial',
          description: 'As pessoas estão cada vez mais aderindo aos Planos Odontológicos devido ao alto custo dos tratamentos particulares e a carência de serviços públicos quem venham suprir esta necessidade. Também a população tem se conscientizado da importância de se manter a boca saudável e do bem estar que isso proporciona ao indivíduo. Assim a ORALMED se coloca como uma excelente opção para lhe oferecer um Plano Odontológico de qualidade, com agilidade no atendimento e de forma a facilitar sua vida, oferecendo-lhe todos os serviços num só local.'
        }
        ];

  
  constructor(platform: Platform,public navCtrl: NavController, public navParams: NavParams) {
   
  }
  
  ionViewDidLoad() {
      
  }

  realizarPlanoIdividual(card:any){
    alert("Plano Individual");
  }

  realizarPlanoFamiliar(card:any){
    alert("Plano Familiar");
  }

  realizarPlanoEmpresarial(card:any){
    alert("Plano Empresarial");
  }

}
