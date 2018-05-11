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
// import { PuestoDeTrabajoPage } from '../puesto-de-trabajo/puesto-de-trabajo'
import { TabsPage } from '../tabs/tabs';
var EscogerPuestoTrabajoPage = /** @class */ (function () {
    function EscogerPuestoTrabajoPage(loadingController, navCtrl, navParams, http, rolUsuario) {
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.rolUsuario = rolUsuario;
        this.user = rolUsuario.claseUsuario;
        this.isenabled = false;
        this.listaDePuestos = this.navParams.data;
    }
    EscogerPuestoTrabajoPage.prototype.entrarPuestosDeTrabajo = function (puestoId, nombrePuesto) {
        this.cargarDatos(puestoId, nombrePuesto);
    };
    EscogerPuestoTrabajoPage.prototype.cargarDatos = function (puestoId, nombrePuesto) {
        var _this = this;
        var loading = this.loadingController.create({ content: 'Cargando, por favor espere un momento' });
        void loading.present();
        this.rolUsuario.puestoNombre = nombrePuesto;
        this.http.cargarDatos("" + this.rolUsuario.area, puestoId).then(function (res) {
            _this.rolUsuario.cantidadEmpleados = res.datos.cantidadEmpleados;
            _this.rolUsuario.novedadesSinAtender = res.datos.novedadesSinAtender;
            _this.rolUsuario.cantidadNovedadesSinAtender = res.datos.novedadesSinAtender.length;
            _this.rolUsuario.novedadesAtendidas = res.datos.novedadesAtendidas;
            _this.rolUsuario.puesto = puestoId;
            var puesto = { puestoId: puestoId, nombrePuesto: nombrePuesto, novedadesSinAtender: res.datos.novedadesSinAtender.length };
            loading.dismissAll();
            void _this.navCtrl.push(TabsPage, puesto);
        });
    };
    EscogerPuestoTrabajoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EscogerPuestoTrabajoPage');
    };
    EscogerPuestoTrabajoPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-escoger-puesto-trabajo',
            templateUrl: 'escoger-puesto-trabajo.html'
        }),
        __metadata("design:paramtypes", [LoadingController, NavController, NavParams, HttpProvider, GlobalProvider])
    ], EscogerPuestoTrabajoPage);
    return EscogerPuestoTrabajoPage;
}());
export { EscogerPuestoTrabajoPage };
//# sourceMappingURL=escoger-puesto-trabajo.js.map