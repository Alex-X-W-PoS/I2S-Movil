import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { GlobalProvider } from '../../providers/global/global'
import { AreasDeTrabajoPage } from '../areas-de-trabajo/areas-de-trabajo'
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
    void this.navCtrl.push(AreasDeTrabajoPage)
  }
  selectJefe () {
    this.rolUsuario.claseUsuario = 1
    void this.navCtrl.push(AreasDeTrabajoPage)
  }
  selectEmpleado () {
    this.rolUsuario.claseUsuario = 2
    void this.navCtrl.push(AreasDeTrabajoPage)
  }
}
