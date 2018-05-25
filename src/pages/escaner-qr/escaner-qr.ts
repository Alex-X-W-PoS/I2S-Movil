import { Component } from '@angular/core'
import { ActionSheetController,NavController, NavParams, ToastController } from 'ionic-angular'
import { HttpProvider } from '../../providers/http/http'
import { GlobalProvider } from '../../providers/global/global'
import { BarcodeScanner } from '@ionic-native/barcode-scanner'

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

  constructor (public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public http: HttpProvider, public global: GlobalProvider, private qrScanner: BarcodeScanner) {
  }

  scanQR () {
    this.qrScanner.scan({
      'formats': 'QR_CODE',
      'prompt': 'Acerque el codigo QR al escaner.'
    }
    ).then(barcodeData => {
      alert('QR data: ' + barcodeData.text)
    }).catch(err => {
      console.log('Error', err)
    })
  }
}
