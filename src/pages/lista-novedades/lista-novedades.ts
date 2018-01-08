import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';


/**
 * Generated class for the ListaNovedadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-novedades',
  templateUrl: 'lista-novedades.html',
})
export class ListaNovedadesPage {

  prueba: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpProvider) {
  }

  cargarUsuarios(){
  	console.log("jejey");
    this.http.loadNovedades().then( res => {
          this.prueba = res.results;
          console.log(this.prueba)
        },
        error =>{
          console.log(error);
        });
  }


}
