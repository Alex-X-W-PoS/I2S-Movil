import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'
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
  constructor (public navCtrl: NavController, public navParams: NavParams, public classPuesto: HttpProvider) {

  }
  ionViewDidEnter () {
    this.cargarRiesgos()
  }
  cargarRiesgos () {
    this.classPuesto.obtenerPuestoDeTrabajo(this.navParams.data).then(res => {
      this.dataPuestos = res.datos
      this.numEmpleados = this.dataPuestos.num_empleados
      this.numNovedades = this.dataPuestos.num_novedades
      this.arrayRiesgos = this.dataPuestos.valoracion_puesto_trabajo
      this.porcentaje = 0
      console.log(this.dataPuestos)
    },
    error => {
      console.log(error)
    })
  }
  cargarNovedades () {
    void this.navCtrl.push(NovedadesSinAtenderPage, { item: this.dataPuestos.puesto_trabajo_id })
  }
}
