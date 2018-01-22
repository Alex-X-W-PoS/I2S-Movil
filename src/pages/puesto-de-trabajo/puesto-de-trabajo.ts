import { Component } from '@angular/core'
import { NavController, NavParams, LoadingController } from 'ionic-angular'
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
  constructor (public loadingController: LoadingController, public navCtrl: NavController, public navParams: NavParams, public classPuesto: HttpProvider) {

  }

  ionViewDidLoad () {
    this.cargarRiesgos()
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
    // this.puestoNombre = "Facebook"
    // this.dataPuestos = {"valoracion_puesto_trabajo":[{"nombre_riesgo":"Incendio","porcentaje":2},{"nombre_riesgo":"Químico","porcentaje":6}],"num_empleados":4,"num_novedades":3,"puesto_trabajo_id":1}
    // this.numEmpleados = this.dataPuestos.num_empleados
    // this.numNovedades = this.dataPuestos.num_novedades
    // this.arrayRiesgos = this.dataPuestos.valoracion_puesto_trabajo
    // this.porcentaje = 0

  }
  cargarNovedades () {
    void this.navCtrl.push(NovedadesSinAtenderPage, { item: this.dataPuestos.puesto_trabajo_id })
  }
}
