var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { HttpProvider } from '../../providers/http/http';
import { NovedadesSinAtenderPage } from '../novedades-sin-atender/novedades-sin-atender';
import Chart from 'chart.js';
var PuestoDeTrabajoPage = /** @class */ (function () {
    function PuestoDeTrabajoPage(loadingController, navCtrl, navParams, classPuesto, rolUsuario) {
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.classPuesto = classPuesto;
        this.rolUsuario = rolUsuario;
    }
    PuestoDeTrabajoPage.prototype.ionViewDidEnter = function () {
        this.cargarDatos();
        var altasCantidad = 0;
        var mediaCantidad = 0;
        var bajaCantidad = 0;
        for (var i = this.rolUsuario.novedadesSinAtender.length - 1; i >= 0; --i) {
            if (this.rolUsuario.novedadesSinAtender[i].prioridad === 'alta') {
                altasCantidad = altasCantidad + 1;
            }
            else if (this.rolUsuario.novedadesSinAtender[i].prioridad === 'media') {
                mediaCantidad = mediaCantidad + 1;
            }
            else if (this.rolUsuario.novedadesSinAtender[i].prioridad === 'baja') {
                bajaCantidad = bajaCantidad + 1;
            }
        }
        var ctx = document.getElementById('chart');
        var data = {
            datasets: [{
                    data: [altasCantidad, mediaCantidad, bajaCantidad],
                    backgroundColor: ['red', 'orange', 'green']
                }],
            labels: ["ALTA(" + altasCantidad + ")", "MEDIA(" + mediaCantidad + ")", "BAJA(" + bajaCantidad + ")"]
        };
        var chart = new Chart(ctx, { type: 'doughnut', data: data });
    };
    PuestoDeTrabajoPage.prototype.cargarDatos = function () {
        this.cantidadEmpleados = this.rolUsuario.cantidadEmpleados;
    };
    PuestoDeTrabajoPage.prototype.cargarRiesgos = function () {
        var _this = this;
        var loading = this.loadingController.create({ content: 'Cargando, por favor espere un momento' });
        void loading.present();
        this.classPuesto.obtenerPuestoDeTrabajo(this.navParams.data.puestoId).then(function (res) {
            _this.puestoNombre = _this.navParams.data.nombrePuesto;
            _this.dataPuestos = res.datos;
            _this.numEmpleados = _this.dataPuestos.num_empleados;
            _this.numNovedades = _this.dataPuestos.num_novedades;
            _this.arrayRiesgos = _this.dataPuestos.valoracion_puesto_trabajo;
            _this.porcentaje = 0;
            loading.dismissAll();
        }, function (error) {
            console.log(error);
        });
    };
    PuestoDeTrabajoPage.prototype.cargarNovedades = function () {
        void this.navCtrl.push(NovedadesSinAtenderPage, { puestoId: this.dataPuestos.puesto_trabajo_id });
    };
    PuestoDeTrabajoPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-puesto-de-trabajo',
            templateUrl: 'puesto-de-trabajo.html'
        }),
        __metadata("design:paramtypes", [LoadingController, NavController, NavParams, HttpProvider, GlobalProvider])
    ], PuestoDeTrabajoPage);
    return PuestoDeTrabajoPage;
}());
export { PuestoDeTrabajoPage };
//# sourceMappingURL=puesto-de-trabajo.js.map