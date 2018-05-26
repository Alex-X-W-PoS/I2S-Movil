import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'

@Component({
  selector: 'page-equipos',
  templateUrl: 'equipos.html'
})
export class EquiposPage {
  equipo: any
  foto: any
  constructor (public navCtrl: NavController, public navParams: NavParams) {
    this.equipo = navParams.data.equipo
    this.foto = this.equipo.fotoUrl
  }

  ionViewDidLoad () {
    console.log('ionViewDidLoad EquiposPage')
  }

}
