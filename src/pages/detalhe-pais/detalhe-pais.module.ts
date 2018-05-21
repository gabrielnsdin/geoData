import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhePaisPage } from './detalhe-pais';

@NgModule({
  declarations: [
    DetalhePaisPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhePaisPage),
  ],
})
export class DetalhePaisPageModule {}
