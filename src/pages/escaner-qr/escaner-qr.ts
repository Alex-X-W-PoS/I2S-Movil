import { Component } from '@angular/core'
import { ActionSheetController, NavController, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular'
import { HttpProvider } from '../../providers/http/http'
import { GlobalProvider } from '../../providers/global/global'
import { BarcodeScanner } from '@ionic-native/barcode-scanner'
import { EscogerPuestoTrabajoPage } from '../escoger-puesto-trabajo/escoger-puesto-trabajo'

@Component({
  selector: 'page-escaner-qr',
  templateUrl: 'escaner-qr.html'
})

export class EscanerQRPage {
  image = '' // http://img04.deviantart.net/b31c/i/2015/254/a/2/mabel_pines_render_by_pokemonlover7669-d997jl2.png
  imgurLink = ''
  puestoId: any
  descripcion: string
  prioridad = ''
  isenabled: boolean

  constructor (public loadingController: LoadingController, private alertCtrl: AlertController, public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public puestos: HttpProvider, public global: GlobalProvider, private qrScanner: BarcodeScanner, public rolUsuario: GlobalProvider) {
  }

  scanQR () {
    this.qrScanner.scan({
      'formats': 'QR_CODE',
      'prompt': 'Acerque el codigo QR al escaner.',
      'resultDisplayDuration': 0
    }
    ).then(barcodeData => {
      this.entrarPuestosDeTrabajo(barcodeData.text)
    }).catch(err => {
      console.log('Error', err)
    })
  }

  entrarPuestosDeTrabajo (areaId) {
    this.rolUsuario.area = areaId
    let loading = this.loadingController.create({ content: 'Cargando, por favor espere un momento' })
    void loading.present()
    this.puestos.obtenerPuestoDeTrabajoDeArea(`${areaId}`).then(res => {
      loading.dismissAll()
      if (res.datos.length > 0) {
        void this.navCtrl.push(EscogerPuestoTrabajoPage, res.datos)
      } else {
        return this.noHayPuestosAlert()
        console.log('No existe puestos en esa area')
      }
    },
    error => {
      console.log('errorr', JSON.stringify(error))
    })
  }
  noHayPuestosAlert () {
    let alert = this.alertCtrl.create({
      subTitle: 'No existen puestos en esta Area',
      buttons: ['Aceptar'],
      cssClass: 'alertas'
    })
    return alert.present()
  }
}
