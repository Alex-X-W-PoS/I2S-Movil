import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { AccidentesPage } from '../accidentes/accidentes'
import { GlobalProvider } from '../../providers/global/global'
import moment from 'moment'
@IonicPage()
@Component({
  selector: 'page-lista-accidentes',
  templateUrl: 'lista-accidentes.html'
})
export class ListaAccidentesPage {
  public detallesAccidentes: any
  constructor (public navCtrl: NavController, public navParams: NavParams, public rolUsuario: GlobalProvider) {
    this.detallesAccidentes = this.rolUsuario.detallesAccidentes
  }

  ionViewDidLoad () {
    console.log('ionViewDidLoad ListaAccidentesPage')
    moment.locale('es')
  }

  cargarAccidentes (accidente) {
    void this.navCtrl.push(AccidentesPage, { accidente : accidente })
  }
  public fecha_ocurrida (fecha) {
    return moment(fecha).format('LL')
  }
}
