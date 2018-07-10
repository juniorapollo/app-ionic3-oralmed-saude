import { EspecialidadePage } from './../pages/especialidade/especialidade';
import { PlanosPage } from './../pages/planos/planos';
import { ProfissionalPage } from './../pages/profissional/profissional';
import { AgendaPage } from './../pages/agenda/agenda';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { IntroPage } from './../pages/intro/intro';
import { ListPage } from '../pages/list/list';

import { UserProvider } from '../providers/user/user';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  public rootPage: any;


  pages: Array<{ title: string, component: any, icon: string }>;
  placeholder = 'assets/img/avatar/cosima-avatar.jpg';
  chosenPicture: any;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public user: UserProvider) {


    this.initializeApp();
    this.setUsuario();
    this.setRootPage();



    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Agendar', component: EspecialidadePage, icon: 'calendar' },
      { title: 'Planos', component: PlanosPage, icon: 'git-network' },
      { title: 'Cadastro', component: LoginPage, icon: 'ios-create-outline' },
      { title: 'Intro', component: IntroPage, icon: 'color-wand' }
    ];

  }

  async initializeApp() {
    if(localStorage.getItem('intro') == null){
      localStorage.setItem('intro',JSON.stringify(true));
     
    }
     this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
     
      
      console.log("MOSTRAR PAGINA INTRO? ");
      console.log(localStorage.getItem('intro'));
      this.splashScreen.hide();
    });
  }

  openPage(page) {

    if(page.title == 'Cadastro'){
      this.nav.push(page.component);
    }
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  setUsuario() {
    this.user.setUser(JSON.parse(localStorage.getItem('principal')));
  }

  setRootPage() {
    let mostrarIntro: boolean = JSON.parse(localStorage.getItem('intro'));
      if(mostrarIntro){
        this.rootPage = IntroPage;
      }else{
        if (!this.existePrincipal()) {
          this.rootPage = LoginPage;
        } else {
          this.rootPage = HomePage;
        }
      }   
  }

  existePrincipal(): boolean {
    let principal = localStorage.getItem('principal');
    if (!principal || principal == null) {
      return false;
    } else {
      return true;
    }
  }
}
