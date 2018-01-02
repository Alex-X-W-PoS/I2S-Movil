import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular'

@Component({
  selector: 'page-puesto-de-trabajo',
  templateUrl: 'puesto-de-trabajo.html'
})
export class PuestoDeTrabajoPage {
  constructor(public actionSheetCtrl: ActionSheetController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PuestoDeTrabajoPage');
  }

}
