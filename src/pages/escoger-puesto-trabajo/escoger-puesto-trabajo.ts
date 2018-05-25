import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular'
import { GlobalProvider } from '../../providers/global/global'
import { HttpProvider } from '../../providers/http/http'
// import { PuestoDeTrabajoPage } from '../puesto-de-trabajo/puesto-de-trabajo'
import { TabsPage } from '../tabs/tabs'

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
  constructor (public loadingController: LoadingController, public navCtrl: NavController, public navParams: NavParams, public http: HttpProvider, public rolUsuario: GlobalProvider) {
    this.user = rolUsuario.claseUsuario
    this.isenabled = false
    this.listaDePuestos = this.navParams.data
  }
  entrarPuestosDeTrabajo (puestoId, nombrePuesto) {
    this.cargarDatos(puestoId, nombrePuesto)
  }
  cargarDatos (puestoId, nombrePuesto) {
    let loading = this.loadingController.create({ content: 'Cargando, por favor espere un momento' })
    void loading.present()
    this.rolUsuario.puestoNombre = nombrePuesto
    this.http.cargarDatos(`${this.rolUsuario.area}`, puestoId).then(res => {
      this.rolUsuario.cantidadEmpleados = res.datos.cantidadEmpleados
      this.rolUsuario.novedadesSinAtender = res.datos.novedadesSinAtender
      this.rolUsuario.cantidadNovedadesSinAtender = res.datos.novedadesSinAtender.length
      this.rolUsuario.novedadesAtendidas = res.datos.novedadesAtendidas
      this.rolUsuario.puesto = puestoId
      let puesto = { puestoId: puestoId, nombrePuesto: nombrePuesto, novedadesSinAtender: res.datos.novedadesSinAtender.length }
      loading.dismissAll()
      void this.navCtrl.push(TabsPage, puesto)
    },
    error => {
      console.log(error)
    })
  }
  ionViewDidLoad () {
    console.log('ionViewDidLoad EscogerPuestoTrabajoPage')
  }

}
