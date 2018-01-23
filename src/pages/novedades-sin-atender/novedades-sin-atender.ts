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
  usuario: number
  public color = 'red'
  public title = 'Novedades Sin Atender'
  novedades: any[]
  size: number

  constructor (public loadingController: LoadingController, public navCtrl: NavController, public navParams: NavParams, public rolUsuario: GlobalProvider, public alertCtrl: AlertController,public http: HttpProvider) {
    this.puesto = navParams.get('puestoId')
    if (navParams && navParams.get('mensaje') !== '') {
      this.mensajeExito = navParams.get('mensaje')
      this.cargarNovedades()
      this.usuario = rolUsuario.claseUsuario
    }
  }

  ionViewDidEnter () {
    if (this.rolUsuario.crearNovedad === true) {
      this.rolUsuario.crearNovedad = false
      let alert = this.alertCtrl.create({
        title: 'Novedad agregada exitosamente',
        buttons: ['OK']
      })
      void alert.present()
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
  }

  detallesNovedades (item) {
    void this.navCtrl.push(AtenderNovedadPage, { item: item , 'puesto': this.navParams.get('puestoId') })
  }

}
