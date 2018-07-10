import { PlanosPageModule } from './../pages/planos/planos.module';
import { AgendaPageModule } from './../pages/agenda/agenda.module';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from './../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Keyboard } from '@ionic-native/keyboard';

import { UserProvider } from './../providers/user/user';
import { IntroPageModule } from '../pages/intro/intro.module';
import { ProfissionalPageModule } from '../pages/profissional/profissional.module';
import { ProfissionalProfilePageModule } from '../pages/profissional-profile/profissional-profile.module';
import { EspecialidadePageModule } from '../pages/especialidade/especialidade.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage
  ],
  imports: [
    AgendaPageModule,
    BrowserModule,
    IntroPageModule,
    IonicModule.forRoot(MyApp),
    PlanosPageModule,
    EspecialidadePageModule,
    ProfissionalPageModule,
    ProfissionalProfilePageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    UserProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}
