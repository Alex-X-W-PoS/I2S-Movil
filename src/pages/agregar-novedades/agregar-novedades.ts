import { Component } from '@angular/core'
import { ActionSheetController } from 'ionic-angular'
import { Camera, CameraOptions } from '@ionic-native/camera'
import { HttpProvider } from '../../providers/http/http'

@Component({
  selector: 'page-agregar-novedades',
  templateUrl: 'agregar-novedades.html'
})
export class AgregarNovedadesPage {
  image = ''
  imgurLink = ''
  puestoId = '1'
  descripcion: string
  prioridad = ''

  constructor (private camera: Camera, public actionSheetCtrl: ActionSheetController, public http: HttpProvider) { }

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
        this.http.uploadImageToImgur(imageData).then(res => {
          this.imgurLink = res.data.link
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
        this.http.uploadImageToImgur(imageData).then(res => {
          this.imgurLink = res.data.link
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
  }

  crearNovedad () {
    this.http.agregarNovedad(this.puestoId, this.descripcion, this.prioridad, this.imgurLink).then(res => {
      console.log('exito')
    })
    .catch(error => {
      console.error(error)
    })
  }
}
