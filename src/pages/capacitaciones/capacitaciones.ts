import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { GlobalProvider } from '../../providers/global/global'
import moment from 'moment'

/**
 * Generated class for the CapacitacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-capacitaciones',
  templateUrl: 'capacitaciones.html'
})
export class CapacitacionesPage {
  puestoNombre: any
  areaNombre: any
  capacitacion: any
  cantidadCapacitados: number
  constructor (public navCtrl: NavController, public navParams: NavParams, public rolUsuario: GlobalProvider) {
  	this.capacitacion = navParams.data.capacitacion
    moment.locale('es')
  }
  ionViewDidLoad () {
    console.log('ionViewDidLoad CapacitacionesPage')
    this.puestoNombre = this.rolUsuario.puestoNombre
    this.areaNombre = this.rolUsuario.areaNombre
    this.cantidadCapacitados = this.capacitacion.capacitados.length
    console.log(this.cantidadCapacitados)
  }
  public fecha_ocurrida (fecha) {
    return moment(fecha).format('LL')
  }
}
