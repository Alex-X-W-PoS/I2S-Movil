import { Component } from '@angular/core'
import { GlobalProvider } from '../../providers/global/global'
import { CapacitacionesPage } from '../capacitaciones/capacitaciones'
import { IonicPage, NavController, NavParams } from 'ionic-angular'


@IonicPage()
@Component({
  selector: 'page-lista-capacitaciones',
  templateUrl: 'lista-capacitaciones.html'
})
export class ListaCapacitacionesPage {
  public infoCapacitaciones: any
  constructor (public navCtrl: NavController, public navParams: NavParams, public rolUsuario: GlobalProvider) {
  	this.infoCapacitaciones = this.rolUsuario.informacionCapacitaciones
  }

  ionViewDidLoad () {
    console.log('ionViewDidLoad ListaCapacitacionesPage')
  }
  cargarCapacitacion (capacitacion) {
    void this.navCtrl.push(CapacitacionesPage, { capacitacion: capacitacion })
  }
  n_capacitados (capacitacion) {
    return capacitacion.capacitados.length
  }
}
