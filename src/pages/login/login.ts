import { Component, ViewChild } from '@angular/core';
import { IonicPage, LoadingController,App, NavController, NavParams ,AlertController, Slides} from 'ionic-angular';
import { HomePage } from '../home/home';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserProvider } from './../../providers/user/user';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html', 
})
export class LoginPage {

  signupForm: FormGroup;
  public loginForm: any;


  public backgroundImage = 'assets/img/background/bgCadastro.jpg';
  // public backgroundImage = 'https://i0.wp.com/www.algerie-focus.com/wp-content/uploads/2015/03/faculte-de-medecine.jpg?fit=801%2C599&ssl=1';
  // public backgroundImage = 'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Free-Photos-Doctor-HD-PIC-WPB009364-758x474.jpg';

  constructor(
    public navCtrl:      NavController, 
    public navParams:    NavParams,
    public loadingCtrl:  LoadingController,
    public alertCtrl:    AlertController,
    public formBuilder:  FormBuilder,
    public userProvider: UserProvider,
    public app:          App) {

    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let telRegex = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
    this.signupForm = this.formBuilder.group({
      // Primeiro item do array eé o valor inicial do campo no caso vazio
      nome:     ['', [Validators.required, Validators.minLength(3)]],
      email:    ['', Validators.compose([Validators.required,Validators.pattern(emailRegex)])],
      telefone: ['', Validators.compose([Validators.required,Validators.pattern(telRegex)])]
    });
  }

  // Slider methods
  @ViewChild('slider') slider: Slides;
  @ViewChild('innerSlider') innerSlider: Slides;


  ionViewDidLoad() {
   
  }

  onSubmit(): void {
    let user = JSON.stringify(this.signupForm.value);
    this.userProvider.create(user);
    this.navCtrl.setRoot(HomePage);
  }

  goToLogin() {
    this.slider.slideTo(1);
  }

  cadastrar() {
    this.slider.slideTo(2);
  }

  slideNext() {
    this.innerSlider.slideNext();
  }

  slidePrevious() {
    this.innerSlider.slidePrev();
  }

  presentLoading(title,message) {
    const loading = this.loadingCtrl.create({
      duration: 500
    });

    loading.onDidDismiss(() => {
       const alert = this.alertCtrl.create({
        title: title,
        subTitle: message,
        buttons: ['OK']
      });
      alert.present();
    });

    loading.present();
  }

  

  signup() {
    this.presentLoading('Cadastrado com Sucesso','Obrigado por se cadastrar!');
    this.goToLogin();
  }
  resetPassword() {
    this.presentLoading('','An e-mail was sent with your new password.');
  }

  voltarLogin(){
    this.navCtrl.setRoot(LoginPage);
    this.goToLogin();
  }
}
