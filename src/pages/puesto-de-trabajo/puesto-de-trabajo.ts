import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular'
import { GlobalProvider } from '../../providers/global/global'
import { HttpProvider } from '../../providers/http/http'
import { NovedadesSinAtenderPage } from '../novedades-sin-atender/novedades-sin-atender'
import Chart from 'chart.js'

@IonicPage()
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
    this.cargarDatos()
    let altasCantidad = 0
    let mediaCantidad = 0
    let bajaCantidad = 0
    for (let i = this.rolUsuario.novedadesSinAtender.length - 1; i >= 0; --i) {
      if (this.rolUsuario.novedadesSinAtender[i].prioridad === 'alta') {
        altasCantidad = altasCantidad + 1
      } else if (this.rolUsuario.novedadesSinAtender[i].prioridad === 'media') {
        mediaCantidad = mediaCantidad + 1
      } else if (this.rolUsuario.novedadesSinAtender[i].prioridad === 'baja') {
        bajaCantidad = bajaCantidad + 1
      }
    }
    let ctx = document.getElementById('chart')
    let data = {
      datasets: [{
        data: [altasCantidad, mediaCantidad, bajaCantidad],
        backgroundColor: ['red', 'orange', 'green']
      }],
      labels: [`ALTA(${altasCantidad})`, `MEDIA(${mediaCantidad})`, `BAJA(${bajaCantidad})`]
    }
    let chart = new Chart(ctx, { type: 'doughnut', data: data })
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
