import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular'
import { AgregarNovedadesPage } from '../agregar-novedades/agregar-novedades'
import { AtenderNovedadPage } from '../atender-novedad/atender-novedad'
import { HttpProvider } from '../../providers/http/http'
import { GlobalProvider } from '../../providers/global/global'

@IonicPage()
@Component({
  selector: 'page-novedades-sin-atender',
  templateUrl: 'novedades-sin-atender.html'
})
export class NovedadesSinAtenderPage {
  mensajeExito = ''
  puesto: string
  usuario: number
  public title = 'Novedades Sin Atender'
  novedades: any[]
  size: number

  constructor (public loadingController: LoadingController, public navCtrl: NavController, public navParams: NavParams, public rolUsuario: GlobalProvider, public alertCtrl: AlertController,public http: HttpProvider) {
    this.puesto = navParams.get('item')
    if (navParams && navParams.get('mensaje') !== '') {
      this.mensajeExito = navParams.get('mensaje')
      this.cargarNovedades()
      this.usuario = rolUsuario.claseUsuario
    }
  }

  ionViewDidLoad () {
    if (this.mensajeExito && this.mensajeExito !== '') {
      let alert = this.alertCtrl.create({
        title: this.mensajeExito,
        buttons: ['OK']
      })
      void alert.present()
    }
  }

  agregarNovedades () {
    void this.navCtrl.push(AgregarNovedadesPage, { item: this.puesto })
  }

  cargarNovedades () {
    // this.novedades = [{"id":3,"puesto_trabajo_id":1,"descripcion":"el ojo seco","prioridad":"urgente","foto_url":"https://i.imgur.com/U0ueJED.jpg","atendida":false,"fechaCreacion":"2018-01-19T02:17:05.920Z"},{"id":6,"puesto_trabajo_id":1,"descripcion":"wolas","prioridad":"media","foto_url":"https://i.imgur.com/sd9wjRz.jpg","atendida":false,"fechaCreacion":"2018-01-19T05:35:02.421Z"},{"id":13,"puesto_trabajo_id":1,"descripcion":"Movimiento Naranja","prioridad":"baja","foto_url":"","atendida":false,"fechaCreacion":"2018-01-22T02:16:50.330Z"}]
    // this.size = this.novedades.length
    let loading = this.loadingController.create({ content : 'Cargando, por favor espere un momento' })
    void loading.present()
    this.http.obetenerNovedadesSinAtender(this.puesto).then(res => {
      this.novedades = res.datos
      this.size = this.novedades.length
      loading.dismissAll()
    },
    error => {
      console.log(error)
    })
  }

  detallesNovedades (item) {
    void this.navCtrl.push(AtenderNovedadPage, { item: item })
  }

}
