import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'

/**
 * Generated class for the AccidentesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accidentes',
  templateUrl: 'accidentes.html'
})
export class AccidentesPage {
  public atendido: any
  public accidente: any
  constructor (public navCtrl: NavController, public navParams: NavParams) {
    this.accidente = this.navParams.data.accidente
    this.atendido = this.accidente.atendido_en_empresa
  }
  ionViewDidLoad () {
    console.log('ionViewDidLoad AccidentesPage')
  }

}
