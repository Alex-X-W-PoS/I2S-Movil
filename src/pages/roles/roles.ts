
import { IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-roles',
  templateUrl: 'roles.html',
})
export class RolesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RolesPage');
  }

}



import { Component } from '@angular/core';

import { Platform, ActionSheetController } from 'ionic-angular';


@Component({
  templateUrl: 'basic.html'
})
export class BasicPage {
  constructor(
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController
  ) { }

  openMenu() {
    
  }
}