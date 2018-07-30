import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { GlobalProvider } from '../../providers/global/global'
import { EscanerQRPage } from '../escaner-qr/escaner-qr'

@IonicPage()
@Component({
  selector: 'page-roles',
  templateUrl: 'roles.html'
})
export class RolesPage {
  public text: string = '2'
  isenabled: boolean
  constructor (public navCtrl: NavController, public navParams: NavParams, public rolUsuario: GlobalProvider) {
    this.isenabled = false
  }

  selectInspector () {
    this.rolUsuario.claseUsuario = 0
    void this.navCtrl.push(EscanerQRPage)
  }
  selectJefe () {
    this.rolUsuario.claseUsuario = 1
    void this.navCtrl.push(EscanerQRPage)
  }
  selectEmpleado () {
    this.rolUsuario.claseUsuario = 2
    void this.navCtrl.push(EscanerQRPage)
  }
  /*selectQR () {
    this.rolUsuario.claseUsuario = 2
    void this.navCtrl.push(EscanerQRPage)
  }*/
  ionViewDidLoad () {
    this.rolUsuario.enPuestoDeTrabajo = false
  }
}
