import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http'
import { GlobalProvider } from '../global/global'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

// export const BASE_PATH = 'http://i2solutions.herokuapp.com' https://i2s-app.herokuapp.com
// export const BASE_PATH = (process.env.NODE_ENV !== 'local' ? 'http://i2solutions.herokuapp.com' : 'http://localhost:3001')

// export const BASE_PATH = 'http://localhost:3001'
export const BASE_PATH = 'https://i2s-app.herokuapp.com'

@Injectable()
export class HttpProvider {
  datos: any
  constructor (public http: Http, public global: GlobalProvider) {
  }

  login (usuario: string, clave: string) {
    let data = { usuario, clave }
    return this.http
    .post(`${BASE_PATH}/api/auth/login`,data)
    .map(res => res.json(),
      err => {
        console.log(err)
      }
      )
    .toPromise()
  }
  obtenerPuestoDeTrabajoDeArea (idArea: string) {
    return this.http
    .get(`${BASE_PATH}/api/movil/puestosDeUnArea/${idArea}/`)
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
    let data = { puestosId: puestoId, descripcion, prioridad, fotoUrl: urlFoto }
    return this.http
    .post(`${BASE_PATH}/api/movil/novedad`,data)
    .map(res => res.json(),
      err => {
        console.log(err)
      }
      )
    .toPromise()
  }

  marcarComoAtendida (novedadId: string, puestoId: string, descripcion: string) {
    let data = { atendida: true, descripcionAtendida: descripcion }
    return this.http
    .put(`${BASE_PATH}/api/movil/novedad/${novedadId}`,data)
    .map(res => res.json(),
      err => {
        console.log(err)
      }
      )
    .toPromise()
  }

  obtenerPuestoDeTrabajo (idPuesto: string) {
    return this.http
    .get(`${BASE_PATH}/api/movil/puesto_trabajo/${idPuesto}`)
    .map(res => res.json(),
      err => {
        console.log(err)
      }
      )
    .toPromise()
  }

  obetenerNovedadesSinAtender (idPuesto: string) {
    return this.http
    .get(`${BASE_PATH}/api/movil/novedadesSinAtender/${idPuesto}`)
    .map(res => res.json(),
      err => {
        console.log(err)
      }
      )
    .toPromise()
  }

  cargarDatos (areaId: string, puestoId: string) {
    return this.http
    .get(`${BASE_PATH}/api/movil/area/${areaId}/puesto/${puestoId}/${1}`) // coloco 1 que indica establecimiento, despues de cambiará
    .map(res => {
      let datos = res.json()
      console.log(datos)
      this.global.novedadesSinAtender = datos['datos']['novedadesSinAtender']
      this.global.novedadesAtendidas = datos['datos']['novedadesAtendidas']
      console.log('Novedades sin atender',this.global.novedadesSinAtender)
      console.log('novedadesAtendidas', this.global.novedadesAtendidas)
      return datos
    },
      err => {
        console.log(err)
      }
      )
    .toPromise()
  }
}
