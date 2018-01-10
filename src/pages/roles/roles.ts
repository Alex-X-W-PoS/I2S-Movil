import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { GlobalProvider } from '../../providers/global/global'
@IonicPage()
@Component({
  selector: 'page-roles',
  templateUrl: 'roles.html'
})
export class RolesPage {
  constructor (public navCtrl: NavController, public navParams: NavParams, public rolUsuario: GlobalProvider) {
  }

  selectInspector () {
  	this.rolUsuario.claseUsuario = 0
  }
  selectJefe () {
  	this.rolUsuario.claseUsuario = 1
  }
  selectEmpleado () {
  	this.rolUsuario.claseUsuario = 2
  }
}
