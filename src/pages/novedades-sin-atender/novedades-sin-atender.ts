import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular'
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
  usuario: number
  public color = 'red'
  public title = 'Novedades Sin Atender'
  novedades: any[]
  size: number
  puesto: string

  constructor (public toastCtrl: ToastController, public loadingController: LoadingController, public navCtrl: NavController, public navParams: NavParams, public rolUsuario: GlobalProvider, public alertCtrl: AlertController,public http: HttpProvider) {
    this.puesto = navParams.get('puestoId')
    if (navParams && navParams.get('mensaje') !== '') {
      this.mensajeExito = navParams.get('mensaje')
      this.cargarNovedades()
      this.usuario = rolUsuario.claseUsuario
    }
  }

  ionViewDidEnter () {
    if (this.rolUsuario.crearNovedad === true) {
      this.rolUsuario.atenderNovedad = false
      this.rolUsuario.crearNovedad = false
      let toast = this.toastCtrl.create({
        message: 'Novedad agregada exitosamente',
        duration: 2000,
        position: 'bottom'
      })
      void toast.present()
    }
    this.cargarNovedades()
  }

  agregarNovedades () {
    void this.navCtrl.push(AgregarNovedadesPage, { item: this.navParams.get('puestoId') })
  }

  regresar () {
    void this.navCtrl.pop()
  }

  cargarNovedades () {
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
    // this.novedades.sort(sortfunction)
    // this.novedades = [{"id":2,"puesto_trabajo_id":1,"descripcion":"El operario no usa guantes","prioridad":"media","foto_url":"https://i.imgur.com/E4S80tP.jpg","atendida":false,"fechaCreacion":"2018-01-23T04:03:48.060Z"},{"id":3,"puesto_trabajo_id":1,"descripcion":"Las sillas no estan pintadas","prioridad":"baja","foto_url":"https://i.imgur.com/U0ueJED.jpg","atendida":false,"fechaCreacion":"2018-01-23T04:03:48.060Z"},{"id":1,"puesto_trabajo_id":1,"descripcion":"No esta bien aislado el cable","prioridad":"urgente","foto_url":"https://i.imgur.com/YrQ2Aqz.jpg","atendida":true,"fechaCreacion":"2018-01-23T04:03:48.060Z","descripcionAtendida":"Se atendio"}]
    // this.size = this.novedades.length
  }

  detallesNovedades (item) {
    void this.navCtrl.push(AtenderNovedadPage, { item: item , 'puesto': this.navParams.get('puestoId') })
  }

}
