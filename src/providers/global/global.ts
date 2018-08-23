import { Injectable } from '@angular/core'

@Injectable()
export class GlobalProvider {
  // Variables globales que seran usadas en toda la app, Son accedidas mediante la llamada
  // Variable que me permite saber si es Jefe de seguridad 1, Inspector de Seguridad 0 o empleado 2
  public claseUsuario: number = 0
  // Variable que me permite crear una novedad
  public crearNovedad: boolean = false
  // Variable que me indica si una novedad esta atendida o no
  public atenderNovedad: boolean = false
  // Varibale que me guarda el id area
  public area: string = ''
  // Variable que me guarda el id del puesto
  public puesto: string = ''
// Varibale que me guarda el nombre del puesto
  public puestoNombre: string = ''
  // Varibale que me guarda el nombre del area
  public areaNombre: string = ''
  // Array que me almacena las novedades sin atender
  public novedadesSinAtender: any
  // Array que me almacena las novedades atendida
  public novedadesAtendidas: any
  public enPuestoDeTrabajo: boolean = false
  // Variable que me almacena la cantidad de novedades sin atender
  public cantidadNovedadesSinAtender: number = 0
  // Variable que me almacena la cantidad de Empleados
  public cantidadEmpleados: number = 0
  // Variable que me almacena la cantidad de Equipos de Protección
  public cantidadEquiposProteccion: number = 0
  // Varibale que me almacena los equipos de protección
  public equiposProteccion: any
  // Variable Array que me almacena las capacitaciones
  public informacionCapacitaciones: any
  // Variable Array que me almacena los accidentes
  public detallesAccidentes: any
}
