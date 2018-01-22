import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { HttpProvider } from '../../providers/http/http'
import { PuestoDeTrabajoPage } from '../puesto-de-trabajo/puesto-de-trabajo'
import { GlobalProvider } from '../../providers/global/global'
@IonicPage()
@Component({
  selector: 'page-areas-de-trabajo',
  templateUrl: 'areas-de-trabajo.html'
})
export class AreasDeTrabajoPage {
  listaDeAreas: any
  areaValue: any
  puestoValue: any
  user: any
  isenabled: boolean
  constructor (public navCtrl: NavController, public navParams: NavParams, public puestos: HttpProvider, public rolUsuario: GlobalProvider) {
    this.user = rolUsuario.claseUsuario
    this.isenabled = false
  }
  obtenerAreas () {
    this.listaDeAreas = ['']
    this.puestoValue = undefined
    this.verifyButton()
    this.puestos.obtenerPuestoDeTrabajoDeArea(this.areaValue).then(res => {
    this.listaDeAreas = res.datos
    console.log(this.listaDeAreas)

    },
    error => {
      console.log(error)
    })
  }
  entrarPuestosDeTrabajo () {
    void this.navCtrl.push(PuestoDeTrabajoPage, this.puestoValue)
  }
  verifyButton () {
    if (this.areaValue !== undefined && this.puestoValue !== undefined) {
      this.isenabled = true
    } else {
      this.isenabled = false
    }
  }
}
