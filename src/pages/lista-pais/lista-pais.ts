import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DetalhePaisPage } from '../detalhe-pais/detalhe-pais';
import { Pais } from '../../model/pais';
import { Continente } from '../../model/continente';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the ListaPaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-pais',
  templateUrl: 'lista-pais.html',
  providers: [
    RestProvider
  ]
})
export class ListaPaisPage {

  teste: Continente;
  continentes: Continente[];
  paises: Pais[];
  view: Pais[];
  paisesRest: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.teste = navParams.get('data');
    this.continentes = navParams.get('continentes');
    var brasil = {id: 1,nome:'Brasil', idioma: 'Português', continente : this.continentes[1], populacao: 207660929}
    var argentina = {id: 2,nome:'Argentina', idioma: 'Castelhano', continente : this.continentes[1], populacao: 43131966}
    var uruguai = {id: 3,nome:'Uruguai', idioma: 'Castelhano', continente : this.continentes[1], populacao: 3415866}

    this.view = [brasil,argentina,uruguai];
  }

  ionViewDidLoad() {
    this.getPaises();
  }

  goToPage(pais) {
    this.navCtrl.push(DetalhePaisPage, {
      data: pais
    });
  }

  voltar() {
    this.navCtrl.pop();
 }
  
  getPaises() {
    this.restProvider.getPaises(this.teste.url)
    .then(data => {
      this.paisesRest = data;
    });
  }

}
