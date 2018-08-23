import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http'
import { GlobalProvider } from '../global/global'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

// export const BASE_PATH = 'http://i2solutions.herokuapp.com' https://i2s-app.herokuapp.com
// export const BASE_PATH = (process.env.NODE_ENV !== 'local' ? 'http://i2solutions.herokuapp.com' : 'http://localhost:3001')

// export const BASE_PATH = 'http://localhost:3001'
// https://i2s-app.herokuapp.com/api/movil/puestosDeUnArea/1
export const BASE_PATH = 'https://i2s-app.herokuapp.com'

@Injectable()
export class HttpProvider {
  datos: any
  constructor (public http: Http, public global: GlobalProvider) {
  }
// Función que me permite enviar al api mi clave y usuario y mediante eso me envíe que rol tengo
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
  // Función que pasada el area como argumento, me envía la lista de puesto que existe en el area como respuesta
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
// Función que me guarda la imagenes en Imgur
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
// Función que recibe como argumentos parametros necearios para crear o agregar una nueva novedad.
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
// Función que cambia el atributo atendida de false a true, determinando de esta manera que la novedad fue atendida
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
// Función que recibe como parametro un id de un puesto y retorna los detalles del puesto de trabajo
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
// Función que dado un id puesto, me devuelve todas la novedades sin atender desde el api, que existen es ese puesto.
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
// Función que recibe como parametro el id del area y el id del puesto y me retorna un json con los detalles del puesto y area.
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
