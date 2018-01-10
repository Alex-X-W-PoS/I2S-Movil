import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';


/**
 * Generated class for the AreasDeTrabajoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-areas-de-trabajo',
  templateUrl: 'areas-de-trabajo.html',
})
export class AreasDeTrabajoPage {

  todosLosPuestos
  constructor(public navCtrl: NavController, public navParams: NavParams, public puestos:HttpProvider) {
  }
	  ionViewDidLoad() {
	  	console.log("asd");
	    this.puestos.obtenerArea().then(res =>{
	    	this.todosLosPuestos = res.results;
	    	console.log(this.todosLosPuestos)
	    },
	    error =>{
	    	console.log(error);
	    });
	}
}

/*
this.http.loadUsers().then(res => {
      this.usuarios = res.results;
      console.log(this.usuarios)
    },
      error => {
        console.log(error);
      });
*/