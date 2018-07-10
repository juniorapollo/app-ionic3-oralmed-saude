import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfissionalProfilePage } from './profissional-profile';

@NgModule({
  declarations: [
    ProfissionalProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfissionalProfilePage),
  ],
})
export class ProfissionalProfilePageModule {}
