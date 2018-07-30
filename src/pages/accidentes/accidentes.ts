import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { GlobalProvider } from '../../providers/global/global'

@IonicPage()
@Component({
  selector: 'page-accidentes',
  templateUrl: 'accidentes.html'
})
export class AccidentesPage {
  public atendido: any
  public accidente: any
  puestoNombre: any
  areaNombre: any
  constructor (public navCtrl: NavController, public navParams: NavParams, public rolUsuario: GlobalProvider) {
    this.accidente = this.navParams.data.accidente
    this.atendido = this.accidente.atendido_en_empresa
  }
  ionViewDidLoad () {
    console.log('ionViewDidLoad AccidentesPage')
    this.puestoNombre = this.rolUsuario.puestoNombre
    this.areaNombre = this.rolUsuario.areaNombre
  }
}
