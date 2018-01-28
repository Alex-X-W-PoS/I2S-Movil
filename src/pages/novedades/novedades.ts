import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { GlobalProvider } from '../../providers/global/global'
import { AtenderNovedadPage } from '../atender-novedad/atender-novedad'
import moment from 'moment'

@IonicPage()
@Component({
  selector: 'page-novedades',
  templateUrl: 'novedades.html'
})
export class NovedadesPage {
  segment = 'sinAtender'
  queryText = ''
  items: any
  itemAtendidos: any
  constructor (public navCtrl: NavController, public navParams: NavParams, public global: GlobalProvider) {
    moment.locale('es')
  }

  ionViewDidLoad () {
    this.initializeItems()
    this.initializeItemsAtendidos()
  }
  initializeItems () {
    this.items = this.global.novedadesSinAtender
  }
  initializeItemsAtendidos () {
    this.itemAtendidos = this.global.novedadesAtendidas
  }
  public time (fecha) {
    return moment(fecha).fromNow()
  }
  public timeAtendida (fechaInicio, fechaFin) {
    let a = moment(fechaInicio)
    let b = moment(fechaFin)
    return a.to(b, true)
  }
  filterNovedadesSinAtender (ev) {
    this.initializeItems()
    let val = ev.target.value
    if (val && val.trim() !== '') {
      this.items = this.items.filter((item) => {
        return (item.descripcion.toLowerCase().indexOf(val.toLowerCase()) > -1)
      })
    }
  }
  filterAtendidas (ev) {
    this.initializeItemsAtendidos()
    let val = ev.target.value
    if (val && val.trim() !== '') {
      this.itemAtendidos = this.itemAtendidos.filter((item) => {
        return (item.descripcion.toLowerCase().indexOf(val.toLowerCase()) > -1)
      })
    }
  }
  detallesNovedades (item) {
    void this.navCtrl.push(AtenderNovedadPage, { item: item , 'puesto': this.navParams.get('puestoId') })
  }
  swipeEvent (e) {
    if (e.direction === 2) {
      this.segment = 'atendidas'
    } else if (e.direction === 4) {
      this.segment = 'sinAtender'
    }
  }
}
