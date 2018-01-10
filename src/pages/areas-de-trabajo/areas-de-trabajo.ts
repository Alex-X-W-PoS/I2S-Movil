import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { HttpProvider } from '../../providers/http/http'

@IonicPage()
@Component({
  selector: 'page-areas-de-trabajo',
  templateUrl: 'areas-de-trabajo.html'
})
export class AreasDeTrabajoPage {
  constructor (public navCtrl: NavController, public navParams: NavParams, public puestos: HttpProvider) {

  }
  /*ionViewDidLoad () {

  }*/
}
