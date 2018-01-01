import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular'

@Component({
  selector: 'page-agregar-novedades',
  templateUrl: 'agregar-novedades.html'
})
export class AgregarNovedadesPage {
	image = '';
  constructor(public actionSheetCtrl: ActionSheetController) {

  }

  presentActionSheet() {
   let actionSheet = this.actionSheetCtrl.create({
     buttons: [
       {
         text: 'Cámara',
         icon: 'camera',
         handler: () => {
           console.log('Destructive clicked');
         }
       },
       {
         text: 'Galería',
         icon: 'image',
         handler: () => {
           this.image = "../../assets/imgs/brokenac.jpg";
         }
       },
       {
         text: 'Cancelar',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
   });

   actionSheet.present();
 }

 borrarImagen(){
 	this.image = '';
 }
}