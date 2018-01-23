import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular'
// import { NovedadesSinAtenderPage } from '../../pages/novedades-sin-atender/novedades-sin-atender'
import { HttpProvider } from '../../providers/http/http'
import { GlobalProvider } from '../../providers/global/global'
// import { global } from '@angular/core/src/util'

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
  public descripcionAtendida: string = ''
  constructor (public loadingController: LoadingController, public navCtrl: NavController, public navParams: NavParams, public http: HttpProvider, public globalVar: GlobalProvider) {
    this.novedadDetalle = navParams.data.item
    this.fecha = this.novedadDetalle.fechaCreacion
    this.descripcion = this.novedadDetalle.descripcion
    this.foto = this.novedadDetalle.foto_url
    this.prioridad = this.novedadDetalle.prioridad
    this.id = this.novedadDetalle.id
    this.user = globalVar.claseUsuario
    this.puestoId = navParams.get('puesto')
  }

  ionViewDidLoad () {
    console.log(' AtenderNovedadPage')
  }

  regresar () {
    void this.navCtrl.pop()
  }

  cambiarEstado () {
    console.log(`ES EL ID: ${this.id}`)
    console.log(`ES EL ID: ${this.puestoId}`)
    console.log(`ES EL ID: ${this.descripcionAtendida}`)
    this.http.marcarComoAtendida(this.id , this.puestoId, this.descripcionAtendida).then(res => {
      this.globalVar.atenderNovedad = true
      this.navCtrl.pop()
      // loading.dismissAll()
      .catch(error => {
        console.error(error)
      })
    }
  )
  }
}
