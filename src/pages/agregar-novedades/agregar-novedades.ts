import { Component } from '@angular/core'
import { ActionSheetController } from 'ionic-angular'
import { Camera, CameraOptions } from '@ionic-native/camera'

@Component({
  selector: 'page-agregar-novedades',
  templateUrl: 'agregar-novedades.html'
})
export class AgregarNovedadesPage {
  image = ''
  constructor(private camera: Camera, public actionSheetCtrl: ActionSheetController) { }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Cámara',
          icon: 'camera',
          handler: () => {
            this.getPicture()
          }
        },
        {
          text: 'Galería',
          icon: 'image',
          handler: () => {
            this.image = '../../assets/imgs/brokenac.jpg'
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked')
          }
        }
      ]
    })
    actionSheet.present()
  }

  borrarImagen() {
    this.image = ''
  }

  getPicture(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    this.camera.getPicture( options )
    .then(imageData => {
      this.image = `data:image/jpeg;base64,${imageData}`
    })
    .catch(error =>{
      console.error( error )
    })
  }
}
