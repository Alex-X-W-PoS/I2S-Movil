import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'
import { ListaNovedadesPage } from '../lista-novedades/lista-novedades'


@Component({
  selector: 'page-puesto-de-trabajo',
  templateUrl: 'puesto-de-trabajo.html'
})
export class PuestoDeTrabajoPage {
  constructor(public navCtrl : NavController) {

  }
  verNovedades(){
  	this.navCtrl.push(ListaNovedadesPage)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PuestoDeTrabajoPage')
  }

}
