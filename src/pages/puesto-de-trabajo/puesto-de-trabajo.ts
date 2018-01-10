import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'
import { HttpProvider } from '../../providers/http/http'


@Component ({
  selector: 'page-puesto-de-trabajo',
  templateUrl: 'puesto-de-trabajo.html'
})
export class PuestoDeTrabajoPage {
  public dataPuestos : any
  public num_empleados : number
  public num_novedades : number
  public arrayRiesgos : any
  public porcentaje : any
  public idRiesgos : any
  constructor (public navCtrl : NavController, public classPuesto:HttpProvider) {
  	this.cargarRiesgos ()
  }

  ionViewDidLoad (){
  }

  cargarRiesgos (){
  	this.classPuesto.obtenerPuestoDeTrabajo('1').then(res =>{
          this.dataPuestos = res.datos
          this.num_empleados = this.dataPuestos.num_empleados
          this.num_novedades = this.dataPuestos.num_novedades
          this.arrayRiesgos = this.dataPuestos.valoracion_puesto_trabajo
          this.porcentaje = 0
          console.log(this.dataPuestos)
        },
        error =>{
          console.log(error)
        });
  }

}

/*
  this.variablePublic.obtenerArea(id:String).then(res =>{
          this.VariableQueAlmacene = res.datos;
        },
        error =>{
          console.log(error);
        });
*/