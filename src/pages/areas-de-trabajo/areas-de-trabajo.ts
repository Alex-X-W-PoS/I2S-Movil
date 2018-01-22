import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular'
import { HttpProvider } from '../../providers/http/http'
import { GlobalProvider } from '../../providers/global/global'
import { EscogerPuestoTrabajoPage } from '../escoger-puesto-trabajo/escoger-puesto-trabajo'

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
  constructor (public loadingController: LoadingController, public navCtrl: NavController, public navParams: NavParams, public puestos: HttpProvider, public rolUsuario: GlobalProvider) {
    this.user = rolUsuario.claseUsuario
    this.isenabled = false
  }
  obtenerAreas () {
    this.listaDeAreas = ['']
    this.puestoValue = undefined
    this.verifyButton()
    this.puestos.obtenerPuestoDeTrabajoDeArea(this.areaValue).then(res => {
      this.listaDeAreas = res.datos
    },
    error => {
      console.log(error)
    })
  }
  entrarPuestosDeTrabajo (areaId) {
    let loading = this.loadingController.create({ content: 'Cargando, por favor espere un momento' })
    loading.present()
    this.puestos.obtenerPuestoDeTrabajoDeArea(areaId).then(res => {
      loading.dismissAll()
      void this.navCtrl.push(EscogerPuestoTrabajoPage, res.datos)
    },
    error => {
      console.log(error)
    })
  }
  verifyButton () {
    if (this.areaValue !== undefined && this.puestoValue !== undefined) {
      this.isenabled = true
    } else {
      this.isenabled = false
    }
  }
}
