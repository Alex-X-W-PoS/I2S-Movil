import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'
import { GlobalProvider } from '../../providers/global/global'

@Component({
  selector: 'page-equipos',
  templateUrl: 'equipos.html'
})
export class EquiposPage {
  equipo: any
  foto: any
  puestoNombre: any
  areaNombre: any
  constructor (public navCtrl: NavController, public navParams: NavParams, public rolUsuario: GlobalProvider) {
    this.equipo = navParams.data.equipo
    this.foto = this.equipo.fotoUrl
  }

  ionViewDidLoad () {
    console.log('ionViewDidLoad EquiposPage')
    this.puestoNombre = this.rolUsuario.puestoNombre
    this.areaNombre = this.rolUsuario.areaNombre
  }

}
