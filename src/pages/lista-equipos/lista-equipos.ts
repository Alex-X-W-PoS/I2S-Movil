import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'
import { EquiposPage } from '../equipos/equipos'
import { GlobalProvider } from '../../providers/global/global'

@Component({
  selector: 'page-lista-equipos',
  templateUrl: 'lista-equipos.html'
})
export class ListaEquiposPage {
  public equiposProteccion: any

  constructor (public navCtrl: NavController, public navParams: NavParams, public rolUsuario: GlobalProvider) {
    this.equiposProteccion = rolUsuario.equiposProteccion
  }

  ionViewDidLoad () {
    console.log('ionViewDidLoad ListaAccidentesPage')
  }

  cargarEquipo (equipo) {
    void this.navCtrl.push(EquiposPage, { equipo: equipo })
  }

}
