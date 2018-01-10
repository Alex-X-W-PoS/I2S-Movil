import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {
  datos: any
  path: string = 'https://randomuser.me/api/?results=25'
  todosPuestos: string = 'https://i2solutions.herokuapp.com/api/movil/puesto_trabajo/area_trabajo/'
  puesto: string = 'https://i2solutions.herokuapp.com/api/movil/puesto_trabajo/'
  constructor (public http: Http) {
  }
  loadUsers () {
    return this.http
    .get(this.path)
    .map(res => res.json(),
      err => {
        console.log(err)
      }
      )
    .toPromise()
  }

  uploadImageToImgur (imagen: String) {
    let data = { image: imagen }
    let headers = new Headers({ 'Authorization': 'Client-ID d40866b7eff4bd0' })
    let options = new RequestOptions({ headers: headers })
    let url = 'https://api.imgur.com/3/image'
    return this.http
    .post(url,data,options)
    .map(res => res.json(),
      err => {
        console.log(err)
      }
      )
    .toPromise()
  }

  agregarNovedad (puestoId: String, descripcion: String, prioridad: String, urlFoto: String) {
    let data = { puesto_trabajo_id: puestoId, descripcion: descripcion, prioridad: prioridad, foto_url: urlFoto }
    let url = 'https://i2solutions.herokuapp.com/api/movil/novedad'
    return this.http
    .post(url,data)
    .map(res => res.json(),
      err => {
        console.error(err)
      }
      )
    .toPromise()
  }
  obtenerPuestoDeTrabajoDeArea (idArea: string) {
    return this.http
      .get(this.todosPuestos.concat(idArea))
      .map(res => res.json(),
      err => {
        console.log(err)
      }
      )
      .toPromise()
  }
  obtenerPuestoDeTrabajo (idPuesto: string) {
    return this.http
      .get(this.puesto.concat(idPuesto))
      .map(res => res.json(),
        err => {
          console.log(err)
        }
        )
        .toPromise()
  }
}

// Ejemplo de método GET para ObtenerArea
/*
  this.variablePublic.obtenerArea(id:String).then(res =>{
          this.VariableQueAlmacene = res.datos;
        },
        error =>{
          console.log(error);
        });
*/
