import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular'
import { AgregarNovedadesPage } from '../agregar-novedades/agregar-novedades'
import { AtenderNovedadPage } from '../atender-novedad/atender-novedad'
import { HttpProvider } from '../../providers/http/http'
@IonicPage()
@Component({
  selector: 'page-novedades-sin-atender',
  templateUrl: 'novedades-sin-atender.html'
})
export class NovedadesSinAtenderPage {
  mensajeExito = ''
  puesto: string = '1'
  public title = 'Novedades Sin Atender'
  novedades: any[]
  size: number

  constructor (public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,public http: HttpProvider) {
    if (navParams && navParams.get('mensaje') !== '') {
      this.mensajeExito = navParams.get('mensaje')
      this.cargarNovedades()
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

  agregarNovedades (idPuesto) {
    void this.navCtrl.push(AgregarNovedadesPage, { item: idPuesto })
  }

  cargarNovedades () {
    this.http.obetenerNovedadesSinAtender(this.puesto).then(res => {
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
    void this.navCtrl.push(AtenderNovedadPage, { item: item })
  }

}
