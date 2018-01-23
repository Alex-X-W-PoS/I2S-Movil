import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular'
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
  constructor (public loadingController: LoadingController, public navCtrl: NavController, public navParams: NavParams, public http: HttpProvider, rolUsuario: GlobalProvider) {
    this.novedadDetalle = navParams.data.item
    this.fecha = this.novedadDetalle.fechaCreacion
    this.descripcion = this.novedadDetalle.descripcion
    this.foto = this.novedadDetalle.foto_url
    this.prioridad = this.novedadDetalle.prioridad
    this.id = this.novedadDetalle.id
    this.user = rolUsuario.claseUsuario
    this.puestoId = navParams.get('puesto')
    // this.novedadDetalle = navParams.data.item
    // this.fecha = '2018-01-22T17:25:54.389Z'
    // this.descripcion = 'Esta es mi descripcion'
    // this.foto = 'https://i.imgur.com/E4S80tP.jpg'
    // this.prioridad = 'urgente'
    // this.id = 1
    // this.user = 0
  }

  ionViewDidLoad () {
    console.log(' AtenderNovedadPage')
  }

  regresar () {
    void this.navCtrl.pop()
  }
  cambiarEstado () {
    // let loading = this.loadingController.create({ content : 'Cargando, por favor espere un momento' })
    // void loading.present()
    this.http.marcarComoAtendida(this.id , this.puestoId).then(res => {
      void this.navCtrl.push(NovedadesSinAtenderPage, {
        mensaje: 'Novedad Atendida con Exito', puestoId: this.puestoId
      })
      // loading.dismissAll()
      .catch(error => {
        console.error(error)
      })
    }
  )
  }
}
