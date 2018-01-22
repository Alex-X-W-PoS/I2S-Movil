import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

export const BASE_PATH = 'http://i2solutions.herokuapp.com' // http://localhost:3000 http://i2solutions.herokuapp.com

@Injectable()
export class HttpProvider {
  datos: any
  path: string = 'https://randomuser.me/api/?results=25'
  todosPuestos: string = BASE_PATH + '/api/movil/puesto_trabajo/area_trabajo/'
  puesto: string = BASE_PATH + '/api/movil/puesto_trabajo/'
  novedadesPath: string = BASE_PATH + '/api/movil/novedad/puesto_trabajo/'
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
    let url = BASE_PATH + '/api/movil/novedad'
    return this.http
    .post(url,data)
    .map(res => res.json(),
      err => {
        console.error(err)
      }
      )
    .toPromise()
  }

  marcarComoAtendida (novedadId: string, puestoId: string) {
    let data = { atendida: true }
    let url = BASE_PATH + '/api/movil/novedad/' + novedadId + '/puesto_trabajo/' + puestoId
    return this.http
    .post(url,data)
    .map(res => console.log(res.json()),
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

  obetenerNovedadesSinAtender (idPuesto: string) {
    return this.http
  .get(this.novedadesPath.concat(idPuesto).concat('?atendida=false'))
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
