import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { AccidentesPage } from '../accidentes/accidentes'

@IonicPage()
@Component({
  selector: 'page-lista-accidentes',
  templateUrl: 'lista-accidentes.html'
})
export class ListaAccidentesPage {

  constructor (public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad () {
    console.log('ionViewDidLoad ListaAccidentesPage')
  }

  cargarAccidentes () {
    void this.navCtrl.push(AccidentesPage)
  }

}
