import { Component } from '@angular/core'
import decode from 'jwt-decode'
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular'
import { GlobalProvider } from '../../providers/global/global'
import { EscanerQRPage } from '../escaner-qr/escaner-qr'
import { HttpProvider } from '../../providers/http/http'

@IonicPage()
@Component({
  selector: 'page-roles',
  templateUrl: 'roles.html'
})
export class RolesPage {
  public text: string = '2'
  isenabled: boolean
  usuario: string = ''
  clave: string = ''
  constructor (public toastCtrl: ToastController, public navCtrl: NavController, public http: HttpProvider, public navParams: NavParams, public rolUsuario: GlobalProvider, private loadingCtrl: LoadingController) {
    this.isenabled = false
  }
  Login () {
    let usuario = this.usuario
    let clave = this.clave
    // let usuario = 'joelerll'
    // let clave = '1234'
    let loading = this.loadingCtrl.create({
      content: 'Por favor, espere...'
    })
    void loading.present()
    this.http.login(usuario, clave).then(res => {
      // console.log(JSON.stringify(res, null, 2))
      void loading.dismiss()
      if (res.estado) {
        let token = res.datos.token
        let decoded = decode(token)
        let { rol } = decoded['data']
        if (rol === 'empleado') {
          this.rolUsuario.claseUsuario = 2
          void this.navCtrl.push(EscanerQRPage)
        } else if (rol === 'inspector-seguridad') {
          this.rolUsuario.claseUsuario = 1
          void this.navCtrl.push(EscanerQRPage)
        } else if (rol === 'jefe-seguridad') {
          this.rolUsuario.claseUsuario = 0
          void this.navCtrl.push(EscanerQRPage)
        } else {
          this.presentToast('El usuario no esta autorizado')
        }
        console.log(rol)
      } else {
        this.presentToast(res.datos)
      }
      // this.imgurLink = res.data.link
      // void loading.dismiss()
    })
    .catch(error => {
      console.error(error)
    })
    // console.log(this.usuario)
    console.log('Login')
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

  presentToast (mensaje: string) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000,
      position: 'middle'
    })
    void toast.present()
  }
}
