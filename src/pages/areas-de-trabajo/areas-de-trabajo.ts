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
  entrarPuestosDeTrabajo (areaId) {
    this.rolUsuario.area = areaId
    if (areaId === '1') {
      this.rolUsuario.areaNombre = 'Administrativa'
    } else if (areaId === '2') {
      this.rolUsuario.areaNombre = 'Matricería'
    } else if (areaId === '3') {
      this.rolUsuario.areaNombre = 'Inyección'
    }
    let loading = this.loadingController.create({ content: 'Cargando, por favor espere un momento' })
    void loading.present()
    this.puestos.obtenerPuestoDeTrabajoDeArea(areaId).then(res => {
      loading.dismissAll()
      void this.navCtrl.push(EscogerPuestoTrabajoPage, res.datos)
    },
    error => {
      console.log(error)
    })
  }
}
