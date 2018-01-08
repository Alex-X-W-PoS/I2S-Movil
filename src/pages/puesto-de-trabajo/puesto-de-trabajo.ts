import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'


@Component({
  selector: 'page-puesto-de-trabajo',
  templateUrl: 'puesto-de-trabajo.html'
})
export class PuestoDeTrabajoPage {
  constructor(public navCtrl : NavController) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PuestoDeTrabajoPage')
  }

}
