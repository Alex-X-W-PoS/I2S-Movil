import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular'
import { GlobalProvider } from '../../providers/global/global'
import { HttpProvider } from '../../providers/http/http'
import { NovedadesSinAtenderPage } from '../novedades-sin-atender/novedades-sin-atender'
import { CapacitacionesPage } from '../capacitaciones/capacitaciones'
import { ListaCapacitacionesPage } from '../lista-capacitaciones/lista-capacitaciones'
import { AccidentesPage } from '../accidentes/accidentes'
import { EquiposPage } from '../equipos/equipos'
import { ListaEquiposPage } from '../lista-equipos/lista-equipos'
import { ListaAccidentesPage } from '../lista-accidentes/lista-accidentes'
import moment from 'moment'

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
  public equiposProteccion: any
  public cantidadEquiposProteccion: number
  public trackEquipos: number

  public detallesAccidentes: any
  public cantidadDeAccidentes: number
  public singleAccidentes: any
  public diasSinAccidentes: Date

  public infoCapacitaciones: any
  public cantCapacitaciones: number
  constructor (public loadingController: LoadingController, public navCtrl: NavController, public navParams: NavParams, public classPuesto: HttpProvider, public rolUsuario: GlobalProvider) {
    this.trackEquipos = 0
    moment.locale('es')
  }
  ionViewDidEnter () {
    this.cargarDatos()
    let altasCantidad = 0
    let mediaCantidad = 0
    let bajaCantidad = 0
    console.log('equipos', this.equiposProteccion)
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
    let _dchart = new Chart(ctx, { type: 'doughnut', data: data })
  }
  cargarDatos () {
    // Carga datos importantes tales como la cantidad de empleados, equipos de proteciión y la cantidad, las capacitaciones y los accidentes con sus repectivas cantidades 
    this.cantidadEmpleados = this.rolUsuario.cantidadEmpleados
    this.equiposProteccion = this.rolUsuario.equiposProteccion
    this.cantidadEquiposProteccion = this.rolUsuario.cantidadEquiposProteccion
    this.infoCapacitaciones = this.rolUsuario.informacionCapacitaciones
    this.cantCapacitaciones = this.infoCapacitaciones.length
    this.detallesAccidentes = this.rolUsuario.detallesAccidentes
    this.cantidadDeAccidentes = this.detallesAccidentes.length
  }
  // Función que que obtiene los riesgos en un puesto, no se la ha usado hasta ahora...posiblemente en un futuro.
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
  // Carga las novedaes 
  cargarNovedades () {
    void this.navCtrl.push(NovedadesSinAtenderPage, { puestoId: this.dataPuestos.puesto_trabajo_id })
  }
  cargarAccidentes (accidente) {
    void this.navCtrl.push(AccidentesPage, { accidente: accidente })
  }
  // Carga los detalles de una capacitación
  cargarCapacitacion (capacitacion) {
    void this.navCtrl.push(CapacitacionesPage, { capacitacion: capacitacion })
  }
  // Muestra la lista de capacitaciones
  mostrarListaCapacitaciones () {
    if (this.cantCapacitaciones > 0) {
      void this.navCtrl.push(ListaCapacitacionesPage)
    }
  }
  // Muestra la lista total de accidentes ocurridos
  mostrarListaAccidentes () {
    if (this.cantidadDeAccidentes > 0) {
      void this.navCtrl.push(ListaAccidentesPage)
    }
  }
  // Carga los detalles de un equipo
  cargarEquipo (equipo) {
    void this.navCtrl.push(EquiposPage, { equipo: equipo })
  }
  // Carga los lista de equipos y lo muestra en el respectivo componente.
  mostrarListaEquipos () {
    void this.navCtrl.push(ListaEquiposPage)
  }
  // retorna la cantidad de capacitados
  public capacitados (capacitacion) {
    return capacitacion.capacitados.length
  }
  // Se usa para mostar la fecha que ocurrió el accidente en formato 12/08/2018
  public fecha_ocurrida (fecha) {
    return moment(fecha).format('LL')
  }
}
