import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'

@Component({
  selector: 'page-equipos',
  templateUrl: 'equipos.html'
})
export class EquiposPage {
  constructor (public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad () {
    console.log('ionViewDidLoad EquiposPage')
  }

}
