import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular'
import { AgregarNovedadesPage } from '../agregar-novedades/agregar-novedades'

@IonicPage()
@Component({
  selector: 'page-novedades-sin-atender',
  templateUrl: 'novedades-sin-atender.html'
})
export class NovedadesSinAtenderPage {

  mensajeExito = ''

  constructor (public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    if (navParams && navParams.get('mensaje') !== '') {
      this.mensajeExito = navParams.get('mensaje')
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
    void this.navCtrl.push(AgregarNovedadesPage)
  }

}
