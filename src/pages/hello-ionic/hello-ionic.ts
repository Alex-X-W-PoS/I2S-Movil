import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  usuarios: any[];

  constructor(public navCtrl: NavController, public http: HttpProvider) {

  }

  cargarUsuarios() {
    this.http.loadUsers().then(res => {
      this.usuarios = res.results;
      console.log(this.usuarios)
    },
      error => {
        console.log(error);
      });
  }
}
