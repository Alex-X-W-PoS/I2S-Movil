import { Component } from '@angular/core'
import { NavController, NavParams, LoadingController } from 'ionic-angular'
import { GlobalProvider } from '../../providers/global/global'
import { HttpProvider } from '../../providers/http/http'
import { NovedadesSinAtenderPage } from '../novedades-sin-atender/novedades-sin-atender'

@Component({
  selector: 'page-puesto-de-trabajo',
  templateUrl: 'puesto-de-trabajo.html'
})
export class PuestoDeTrabajoPage {
  public dataPuestos: any
  public numEmpleados: number
  public numNovedades: number
  public arrayRiesgos: any
  public porcentaje: any
  public idRiesgos: any
  public puestoNombre: any
  public cantidadEmpleados: number
  constructor (public loadingController: LoadingController, public navCtrl: NavController, public navParams: NavParams, public classPuesto: HttpProvider, public rolUsuario: GlobalProvider) {

  }
  ionViewDidEnter () {
    // this.cargarRiesgos()
    this.cargarDatos()
  }
  cargarDatos () {
    this.cantidadEmpleados = this.rolUsuario.cantidadEmpleados
  }
  cargarRiesgos () {
    let loading = this.loadingController.create({ content: 'Cargando, por favor espere un momento' })
    void loading.present()
    this.classPuesto.obtenerPuestoDeTrabajo(this.navParams.data.puestoId).then(res => {
      this.puestoNombre = this.navParams.data.nombrePuesto
      this.dataPuestos = res.datos
      this.numEmpleados = this.dataPuestos.num_empleados
      this.numNovedades = this.dataPuestos.num_novedades
      this.arrayRiesgos = this.dataPuestos.valoracion_puesto_trabajo
      this.porcentaje = 0
      loading.dismissAll()
    },
    error => {
      console.log(error)
    })
  }
  cargarNovedades () {
    void this.navCtrl.push(NovedadesSinAtenderPage, { puestoId: this.dataPuestos.puesto_trabajo_id })
  }
}
