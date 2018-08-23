import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular'
import { GlobalProvider } from '../../providers/global/global'
import { HttpProvider } from '../../providers/http/http'
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
  // Función que  carga todos los datos necesarios de un puesto de trabajo elegido.
  cargarDatos (puestoId, nombrePuesto) {
    let loading = this.loadingController.create({ content: 'Cargando, por favor espere un momento' })
    void loading.present()
    // Se asigna el nombre del puesto a la variable global puestoNombre definida en ./providers/global/global.ts
    this.rolUsuario.puestoNombre = nombrePuesto
    this.http.cargarDatos(`${this.rolUsuario.area}`, puestoId).then(res => {
      // Se asigna el nombre del area a la variable global areaNombre definida en ./providers/global/global.ts
      this.rolUsuario.areaNombre = res.datos.area.nombre
      // Se asigna la cantidad de Empleados a la variable global cantidadEmpleados definida en ./providers/global/global.ts
      this.rolUsuario.cantidadEmpleados = res.datos.cantidadEmpleados
      // Se asigna las Novedades sin Atender a la variable global novedadesSinAtender definida en ./providers/global/global.ts
      this.rolUsuario.novedadesSinAtender = res.datos.novedadesSinAtender
      // Se asigna la cantidad de Novedades sin Atender a la variable global CantidadNovedadesSinAtender definida en ./providers/global/global.ts
      this.rolUsuario.cantidadNovedadesSinAtender = res.datos.novedadesSinAtender.length
      this.rolUsuario.novedadesAtendidas = res.datos.novedadesAtendidas
      this.rolUsuario.cantidadEquiposProteccion = res.datos.equiposProteccion.length
      this.rolUsuario.equiposProteccion = res.datos.equiposProteccion
      this.rolUsuario.informacionCapacitaciones = res.datos.detallesCapacitaciones
      this.rolUsuario.detallesAccidentes = res.datos.detallesAccidentes
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
