import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'

/**
 * Generated class for the AccidentesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accidentes',
  templateUrl: 'accidentes.html'
})
export class AccidentesPage {
  public atendido: any
  public accidente: any
  public accidentesIcons: string []
  public iconChoose: any
  public n: any
  constructor (public navCtrl: NavController, public navParams: NavParams) {
    this.accidente = this.navParams.data.accidente
    this.atendido = this.accidente.atendido_en_empresa
    this.iconos()
    this.n = this.randomInt(1,9)
    this.iconChoose = this.accidentesIcons[this.n]
  }
  ionViewDidLoad () {
    console.log('ionViewDidLoad AccidentesPage')
  }
  iconos () {
    this.accidentesIcons = ['https://www.orbitalesmoleculares.com/wp-content/uploads/2018/01/toxicidad_aguda.png'
    ,'https://www.orbitalesmoleculares.com/wp-content/uploads/2018/01/pictograma_corrosivo.jpg'
    ,'https://www.orbitalesmoleculares.com/wp-content/uploads/2018/01/pictograma_irritacioncutanea.jpg'
    ,'https://www.orbitalesmoleculares.com/wp-content/uploads/2018/01/pictograma_aspiracion.jpg'
    ,'https://www.orbitalesmoleculares.com/wp-content/uploads/2018/01/pictograma_mambiente.jpg'
    ,'https://www.orbitalesmoleculares.com/wp-content/uploads/2018/01/pictograma_explosivos.jpg'
    ,'https://www.orbitalesmoleculares.com/wp-content/uploads/2018/01/pictograma_inflamable.jpg'
    ,'https://www.orbitalesmoleculares.com/wp-content/uploads/2018/01/pictograma_comburente.jpg'
    ,'https://www.orbitalesmoleculares.com/wp-content/uploads/2018/01/pictograma_gas.jpg'
    ,'https://www.orbitalesmoleculares.com/wp-content/uploads/2018/01/pictograma_gas.jpg']
  }
  randomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}
