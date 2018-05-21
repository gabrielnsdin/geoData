import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pais } from '../../model/pais';

/**
 * Generated class for the DetalhePaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-pais',
  templateUrl: 'detalhe-pais.html',
})
export class DetalhePaisPage {

  pais: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pais = navParams.get('data');  
    console.log(this.pais); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesPage');
  }

  voltar() {
    this.navCtrl.pop();
 }

}
