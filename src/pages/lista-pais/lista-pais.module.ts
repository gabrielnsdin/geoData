import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaPaisPage } from './lista-pais';

@NgModule({
  declarations: [
    ListaPaisPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaPaisPage),
  ],
})
export class ListaPaisPageModule {}
