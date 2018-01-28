import { Component } from '@angular/core'
import { NavParams } from 'ionic-angular'
import { GlobalProvider } from '../../providers/global/global'
import { PuestoDeTrabajoPage } from '../puesto-de-trabajo/puesto-de-trabajo'
import { AgregarNovedadesPage } from '../agregar-novedades/agregar-novedades'
import { NovedadesPage } from '../novedades/novedades'

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})

export class TabsPage {
  tabPuestoDeTrabajo = PuestoDeTrabajoPage
  tabAgregarNovedades = AgregarNovedadesPage
  tabNovedades = NovedadesPage
  mySelectedIndex: number
  constructor (navParams: NavParams, public global: GlobalProvider) {
    this.mySelectedIndex = navParams.data.tabIndex || 0
  }
  ionViewDidLoad () {
    this.global.enPuestoDeTrabajo = true
  }

}
