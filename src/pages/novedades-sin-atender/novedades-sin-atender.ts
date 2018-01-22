import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular'
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
  // puesto: string
  usuario: number
  public title = 'Novedades Sin Atender'
  novedades: any[]
  size: number

  constructor (public navCtrl: NavController, public navParams: NavParams, public rolUsuario: GlobalProvider, public alertCtrl: AlertController,public http: HttpProvider) {
    // this.puesto = navParams.get('item')
    // console.log(this.puesto)
    if (navParams && navParams.get('mensaje') !== '') {
      this.mensajeExito = navParams.get('mensaje')
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
    this.cargarNovedades()
  }

  agregarNovedades () {
    void this.navCtrl.push(AgregarNovedadesPage, { item: this.navParams.get('puestoId') })
  }

  regresar () {
    void this.navCtrl.pop()
  }

  cargarNovedades () {
    this.http.obetenerNovedadesSinAtender(this.navParams.get('puestoId')).then(res => {
      this.novedades = res.datos
      this.size = this.novedades.length
      console.log(this.novedades)
      console.log(this.novedades.length)
    },
    error => {
      console.log(error)
    })
  }

  detallesNovedades (item) {
    void this.navCtrl.push(AtenderNovedadPage, { item: item , 'puesto': this.navParams.get('puestoId') })
  }

}
