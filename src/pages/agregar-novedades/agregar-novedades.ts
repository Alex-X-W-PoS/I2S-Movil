import { Component } from '@angular/core'
import { ActionSheetController,NavController, LoadingController, NavParams } from 'ionic-angular'
import { Camera, CameraOptions } from '@ionic-native/camera'
import { HttpProvider } from '../../providers/http/http'
import { GlobalProvider } from '../../providers/global/global'

@Component({
  selector: 'page-agregar-novedades',
  templateUrl: 'agregar-novedades.html'
})
export class AgregarNovedadesPage {
  image = '' // http://img04.deviantart.net/b31c/i/2015/254/a/2/mabel_pines_render_by_pokemonlover7669-d997jl2.png
  imgurLink = ''
  puestoId: any
  descripcion: string
  prioridad = ''
  isenabled: boolean

  constructor (public navCtrl: NavController, public navParams: NavParams, private camera: Camera, public actionSheetCtrl: ActionSheetController, public http: HttpProvider, private loadingCtrl: LoadingController, public global: GlobalProvider) {
    this.puestoId = navParams.get('item')
    this.isenabled = false
  }

  presentActionSheet () {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          icon: 'camera',
          text: 'Cámara',
          handler: () => {
            this.getPicture()
          }
        },
        {
          icon: 'image',
          text: 'Galería',
          handler: () => {
            this.getPictureFromGallery()
          }
        },
        {
          role: 'cancel',
          text: 'Cancelar',
          handler: () => {
            console.log('Cancel clicked')
          }
        }
      ]
    })
    void actionSheet.present()
  }

  borrarImagen () {
    this.image = ''
    this.imgurLink = ''
  }

  getPicture () {
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    this.camera.getPicture(options)
      .then(imageData => {
        this.image = `data:image/jpeg;base64,${imageData}`
        let loading = this.loadingCtrl.create({
          content: 'Por favor, espere...'
        })
        void loading.present()
        this.http.uploadImageToImgur(imageData).then(res => {
          this.imgurLink = res.data.link
          void loading.dismiss()
        })
        .catch(error => {
          console.error(error)
        })
      })
      .catch(error => {
        console.error(error)
      })
  }

  getPictureFromGallery () {
    let options: CameraOptions = {
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    this.camera.getPicture(options)
      .then(imageData => {
        this.image = `data:image/jpeg;base64,${imageData}`
        let loading = this.loadingCtrl.create({
          content: 'Por favor, espere...'
        })
        void loading.present()
        this.http.uploadImageToImgur(imageData).then(res => {
          this.imgurLink = res.data.link
          void loading.dismiss()
        })
        .catch(error => {
          console.error(error)
        })
      })
      .catch(error => {
        console.error(error)
      })
  }

  onChange (prioridad: string) {
    this.prioridad = prioridad
    this.verifyButton()
  }

  crearNovedad () {
    if (this.isNotEmpty(this.puestoId) && this.isNotEmpty(this.descripcion) && this.isNotEmpty(this.prioridad)) {
      let loading = this.loadingCtrl.create({
        content: 'Por favor, espere...'
      })
      void loading.present()
      this.http.agregarNovedad(this.puestoId, this.descripcion, this.prioridad, this.imgurLink).then(res => {
        this.global.crearNovedad = true
        void this.navCtrl.pop()
        void loading.dismiss()
      })
      .catch(error => {
        console.error(error)
      })
    } else {
      alert('No se ha podido crear la novedad. Por favor llene los campos faltantes.')
    }
  }

  cancelar () {
    void this.navCtrl.pop()
  }

  isNotEmpty (valor: string) {
    if (!valor || valor === '') {
      return false
    } else {
      return true
    }
  }

  verifyButton () {
    console.log(this.descripcion)
    if (this.isNotEmpty(this.descripcion) && this.isNotEmpty(this.prioridad)) {
      this.isenabled = true
      console.log('true')
    } else {
      this.isenabled = false
    }
  }
}
