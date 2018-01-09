import { Component } from '@angular/core'
import { ActionSheetController } from 'ionic-angular'
import { Camera, CameraOptions } from '@ionic-native/camera'

@Component({
  selector: 'page-agregar-novedades',
  templateUrl: 'agregar-novedades.html'
})
export class AgregarNovedadesPage {
  image = ''
  constructor (private camera: Camera, public actionSheetCtrl: ActionSheetController) { }

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
            this. getPictureFromGallery()
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
      })
      .catch(error => {
        console.error(error)
      })
  }
}
