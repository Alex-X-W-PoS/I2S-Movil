import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { GlobalProvider } from '../../providers/global/global'
import { HttpProvider } from '../../providers/http/http'
import { PuestoDeTrabajoPage } from '../puesto-de-trabajo/puesto-de-trabajo'

@IonicPage()
@Component({
  selector: 'page-escoger-puesto-trabajo',
  templateUrl: 'escoger-puesto-trabajo.html'
})

export class EscogerPuestoTrabajoPage {
  listaDePuestos: any
  areaValue: any
  user: any
  isenabled: boolean
  constructor (public navCtrl: NavController, public navParams: NavParams, public puestos: HttpProvider, public rolUsuario: GlobalProvider) {
    this.user = rolUsuario.claseUsuario
    this.isenabled = false
    this.listaDePuestos = this.navParams.data
  }
  entrarPuestosDeTrabajo (puestoId, nombrePuesto) {
    let puesto = { puestoId: puestoId, nombrePuesto: nombrePuesto }
    console.log(nombrePuesto)
    void this.navCtrl.push(PuestoDeTrabajoPage, puesto)
  }
  ionViewDidLoad () {
    console.log('ionViewDidLoad EscogerPuestoTrabajoPage')
  }

}
