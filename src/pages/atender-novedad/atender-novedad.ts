import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular'
// import { NovedadesSinAtenderPage } from '../../pages/novedades-sin-atender/novedades-sin-atender'
import { HttpProvider } from '../../providers/http/http'
import { GlobalProvider } from '../../providers/global/global'
// import { global } from '@angular/core/src/util'
import moment from 'moment'

@IonicPage()
@Component({
  selector: 'page-atender-novedad',
  templateUrl: 'atender-novedad.html'
})
export class AtenderNovedadPage {
  novedadDetalle: any
  id: string
  fecha: any
  descripcion: string
  prioridad: string
  foto: any
  puestoId: string
  user: number
  descripcionAtendida: string = ''
  atendida: boolean
  isenabled: boolean
  fechaAtendida: string
  constructor (public loadingController: LoadingController, public navCtrl: NavController, public navParams: NavParams, public http: HttpProvider, public globalVar: GlobalProvider) {
    this.novedadDetalle = navParams.data.item
    this.fecha = this.novedadDetalle.fechaCreacion
    this.descripcion = this.novedadDetalle.descripcion
    this.foto = this.novedadDetalle.foto_url
    this.prioridad = this.novedadDetalle.prioridad
    this.descripcionAtendida = this.novedadDetalle.descripcionAtendida
    this.id = this.novedadDetalle.id
    this.atendida = this.novedadDetalle.atendida
    this.fechaAtendida = this.novedadDetalle.fechaAtendida
    this.user = globalVar.claseUsuario
    this.puestoId = navParams.get('puesto')
    moment.locale('es')
  }

  ionViewDidLoad () {
    console.log(' AtenderNovedadPage')
  }

  regresar () {
    void this.navCtrl.pop()
  }
  public time (fecha) {
    return moment(fecha).fromNow()
  }
  public timeAtendida (fechaInicio, fechaFin) {
    let a = moment(fechaInicio)
    let b = moment(fechaFin)
    return a.to(b, true)
  }
  cambiarEstado () {
    let loading = this.loadingController.create({ content: 'Cargando, por favor espere un momento' })
    void loading.present()
    this.http.marcarComoAtendida(this.id ,`${this.globalVar.puesto}`, this.descripcionAtendida).then(res => {
      // let novedadTmp = this.navParams.data.item
      // let date = new Date()
      // novedadTmp['descripcionAtendida'] = this.descripcionAtendida
      // novedadTmp['atendida'] = true
      // novedadTmp['fechaAtendida'] = date.toISOString()
      this.globalVar.atenderNovedad = true
      let novedad = this.novedadDetalle
      novedad['descripcionAtendida'] = this.descripcionAtendida
      this.globalVar.novedadesAtendidas.push(novedad)
      this.globalVar.cantidadNovedadesSinAtender = this.globalVar.cantidadNovedadesSinAtender - 1

      // ionic no permite reasignar globales, por esto se edita el mismo objeto
      for (let i = this.globalVar.novedadesSinAtender.length - 1; i >= 0; --i) {
        if (this.globalVar.novedadesSinAtender[i].id === this.id) {
          this.globalVar.novedadesSinAtender.splice(i,1)
        }
      }
      loading.dismissAll()
      void this.navCtrl.pop()
    },error => {
      console.log(error)
    })
  }

  isNotEmpty (valor: string) {
    if (!valor || valor === '') {
      return false
    } else {
      return true
    }
  }

  verifyButton () {
    if (this.isNotEmpty(this.descripcionAtendida) && this.descripcionAtendida.length >= 5) {
      this.isenabled = true
    } else {
      this.isenabled = false
    }
  }
}
