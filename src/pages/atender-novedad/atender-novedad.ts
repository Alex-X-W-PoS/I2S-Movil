import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { NovedadesSinAtenderPage } from '../../pages/novedades-sin-atender/novedades-sin-atender'
import { HttpProvider } from '../../providers/http/http'
import { GlobalProvider } from '../../providers/global/global'

@IonicPage()
@Component({
  selector: 'page-atender-novedad',
  templateUrl: 'atender-novedad.html'
})
export class AtenderNovedadPage {
  novedadDetalle: any
  id: string
  fecha: any
  descripcion: string
  prioridad: string
  foto: any
  puestoId: string
  user: number
  descripcionAtendida: string
  constructor (public navCtrl: NavController, public navParams: NavParams, public http: HttpProvider, rolUsuario: GlobalProvider) {
    this.novedadDetalle = navParams.data.item
    this.fecha = this.novedadDetalle.fechaCreacion
    this.descripcion = this.novedadDetalle.descripcion
    this.foto = this.novedadDetalle.foto_url
    this.prioridad = this.novedadDetalle.prioridad
    this.id = this.novedadDetalle.id
    this.user = rolUsuario.claseUsuario
    this.puestoId = navParams.get('puesto')
    console.log(this.descripcionAtendida)
  }

  ionViewDidLoad () {
    console.log(' AtenderNovedadPage')
  }

  regresar () {
    void this.navCtrl.pop()
  }

  cambiarEstado () {
    this.http.marcarComoAtendida(this.id , this.puestoId, this.descripcionAtendida).then(res => {
      void this.navCtrl.push(NovedadesSinAtenderPage, {
        mensaje: 'Novedad Atendida con Exito'
      })
      .catch(error => {
        console.error(error)
      })
    }
  )
  }
}
