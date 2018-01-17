import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { HttpProvider } from '../../providers/http/http'
import { PuestoDeTrabajoPage } from '../puesto-de-trabajo/puesto-de-trabajo'

@IonicPage()
@Component({
  selector: 'page-areas-de-trabajo',
  templateUrl: 'areas-de-trabajo.html'
})
export class AreasDeTrabajoPage {
  listaDeAreas: any
  areaValue: any
  puestoValue: any
  constructor (public navCtrl: NavController, public navParams: NavParams, public puestos: HttpProvider) {
  }
  obtenerAreas () {
    this.listaDeAreas = ['']
    this.puestos.obtenerPuestoDeTrabajoDeArea(this.areaValue).then(res => {
      this.listaDeAreas = res.datos          
    },
      error => {
        console.log(error)
    }) 
  }
  entrarPuestosDeTrabajo () {
    void this.navCtrl.push(PuestoDeTrabajoPage, this.puestoValue)
  }
}
