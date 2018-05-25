import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'
import { EquiposPage } from '../equipos/equipos'

@Component({
  selector: 'page-lista-equipos',
  templateUrl: 'lista-equipos.html'
})
export class ListaEquiposPage {

  constructor (public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad () {
    console.log('ionViewDidLoad ListaAccidentesPage')
  }

  cargarEquipo () {
    void this.navCtrl.push(EquiposPage)
  }

}
