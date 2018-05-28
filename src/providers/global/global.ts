import { Injectable } from '@angular/core'

@Injectable()
export class GlobalProvider {
  public claseUsuario: number = 0
  public crearNovedad: boolean = false
  public atenderNovedad: boolean = false
  public area: string = ''
  public puesto: string = ''
  public puestoNombre: string = ''
  public areaNombre: string = ''
  public novedadesSinAtender: any
  public novedadesAtendidas: any
  public enPuestoDeTrabajo: boolean = false
  // public novedadesSinAtender: any = [{"_id":6,"updatedAt":"2018-01-27T18:45:49.351Z","createdAt":"2018-01-27T18:45:49.351Z","puesto_trabajo_id":1,"descripcion":"mi descripcion","prioridad":"urgente","foto_url":"https://imagen.png","atendida":false,"id":6},{"_id":7,"updatedAt":"2018-01-27T18:47:24.015Z","createdAt":"2018-01-27T18:47:24.015Z","puesto_trabajo_id":1,"descripcion":"asd","prioridad":"alta","foto_url":"","atendida":false,"id":7},{"_id":8,"updatedAt":"2018-01-27T18:47:36.344Z","createdAt":"2018-01-27T18:47:36.344Z","puesto_trabajo_id":1,"descripcion":"asdsa","prioridad":"baja","foto_url":"","atendida":false,"id":8},{"_id":9,"updatedAt":"2018-01-27T18:48:31.460Z","createdAt":"2018-01-27T18:48:31.460Z","puesto_trabajo_id":1,"descripcion":"dsf","prioridad":"alta","foto_url":"","atendida":false,"id":9},{"_id":10,"updatedAt":"2018-01-27T18:49:07.177Z","createdAt":"2018-01-27T18:49:07.177Z","puesto_trabajo_id":1,"descripcion":"dsad","prioridad":"alta","foto_url":"","atendida":false,"id":10},{"_id":11,"updatedAt":"2018-01-27T19:10:19.239Z","createdAt":"2018-01-27T19:10:19.239Z","puesto_trabajo_id":1,"descripcion":"asdas","prioridad":"media","foto_url":"","atendida":false,"id":11},{"_id":12,"updatedAt":"2018-01-27T19:15:41.705Z","createdAt":"2018-01-27T19:15:41.705Z","puesto_trabajo_id":1,"descripcion":"ssdsd","prioridad":"alta","foto_url":"","atendida":false,"id":12}]
  // public novedadesAtendidas: any = [{"_id":3,"puesto_trabajo_id":1,"descripcion":"Las sillas no estan pintadas","prioridad":"baja","foto_url":"https://i.imgur.com/U0ueJED.jpg","atendida":true,"descripcionAtendida":"Si se pintaron a la final","createdAt":"2018-01-27T18:44:42.052Z","updatedAt":"2018-01-27T18:44:42.052Z","fechaAtendida":"2018-01-27T18:44:42.052Z","id":3},{"_id":1,"puesto_trabajo_id":1,"descripcion":"No cuenta con equipos","prioridad":"alta","foto_url":"https://i.imgur.com/YrQ2Aqz.jpg","atendida":true,"descripcionAtendida":null,"createdAt":"2018-01-27T18:44:42.052Z","updatedAt":"2018-01-27T19:01:52.246Z","fechaAtendida":"2018-01-27T18:44:42.052Z","id":1},{"_id":2,"puesto_trabajo_id":1,"descripcion":"El operario no usa guantes","prioridad":"media","foto_url":"https://i.imgur.com/E4S80tP.jpg","atendida":true,"descripcionAtendida":null,"createdAt":"2018-01-27T18:44:42.052Z","updatedAt":"2018-01-27T19:02:46.555Z","fechaAtendida":"2018-01-27T18:44:42.052Z","id":2}]
  public cantidadNovedadesSinAtender: number = 0
  public cantidadEmpleados: number = 0
  public cantidadEquiposProteccion: number = 0
  public equiposProteccion: any
  public informacionCapacitaciones: any
  public detallesAccidentes: any
}
