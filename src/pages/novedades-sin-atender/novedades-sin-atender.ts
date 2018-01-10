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
    if (navParams.get('mensaje') !== '') {
      this.mensajeExito = navParams.get('mensaje')
    }
  }

  ionViewDidLoad () {
    if (this.mensajeExito !== '') {
      this.alertCtrl.create({
        title: 'Mensaje',
        subTitle: this.mensajeExito,
        buttons: ['OK']
      })
    }
  }

  agregarNovedades () {
    void this.navCtrl.push(AgregarNovedadesPage)
  }

}
