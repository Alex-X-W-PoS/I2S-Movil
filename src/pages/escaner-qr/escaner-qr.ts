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
  descripcionAtendida: ''

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
  // funcón que pasada una area como argumento, me redirige al componente "Puestos de Trabajo" con las lista de puestos que existen es esa área
  entrarPuestosDeTrabajo (areaId) {
    this.rolUsuario.area = areaId
    let loading = this.loadingController.create({ content: 'Cargando, por favor espere un momento' })
    void loading.present()
    this.puestos.obtenerPuestoDeTrabajoDeArea(`${areaId}`).then(res => {
      loading.dismissAll()
      if (res.datos.length > 0) {
        void this.navCtrl.push(EscogerPuestoTrabajoPage, res.datos)
      } else {
        // Si no existe el área mostrará una notificación de que no existe.
        this.noHayPuestosAlert()
      }
    },
    error => {
      console.log('errorr', JSON.stringify(error))
    })
  }
  // Función que retorna una alerta de no existencia de puestos es el area que lee el lector QR
  noHayPuestosAlert () {
    let alert = this.alertCtrl.create({
      subTitle: 'No existen puestos en esta Area',
      buttons: ['Aceptar'],
      cssClass: 'alertas'
    })
    alert.present()
  }
}
