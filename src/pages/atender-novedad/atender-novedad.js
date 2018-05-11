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
// import { NovedadesSinAtenderPage } from '../../pages/novedades-sin-atender/novedades-sin-atender'
import { HttpProvider } from '../../providers/http/http';
import { GlobalProvider } from '../../providers/global/global';
// import { global } from '@angular/core/src/util'
import moment from 'moment';
var AtenderNovedadPage = /** @class */ (function () {
    function AtenderNovedadPage(loadingController, navCtrl, navParams, http, globalVar) {
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.globalVar = globalVar;
        this.descripcionAtendida = '';
        this.novedadDetalle = navParams.data.item;
        this.fecha = this.novedadDetalle.fechaCreacion;
        this.descripcion = this.novedadDetalle.descripcion;
        this.foto = this.novedadDetalle.foto_url;
        this.prioridad = this.novedadDetalle.prioridad;
        this.descripcionAtendida = this.novedadDetalle.descripcionAtendida;
        this.id = this.novedadDetalle.id;
        this.atendida = this.novedadDetalle.atendida;
        this.fechaAtendida = this.novedadDetalle.fechaAtendida;
        this.user = globalVar.claseUsuario;
        this.puestoId = navParams.get('puesto');
        moment.locale('es');
    }
    AtenderNovedadPage.prototype.ionViewDidLoad = function () {
        console.log(' AtenderNovedadPage');
    };
    AtenderNovedadPage.prototype.regresar = function () {
        void this.navCtrl.pop();
    };
    AtenderNovedadPage.prototype.time = function (fecha) {
        return moment(fecha).fromNow();
    };
    AtenderNovedadPage.prototype.timeAtendida = function (fechaInicio, fechaFin) {
        var a = moment(fechaInicio);
        var b = moment(fechaFin);
        return a.to(b, true);
    };
    AtenderNovedadPage.prototype.cambiarEstado = function () {
        var _this = this;
        var loading = this.loadingController.create({ content: 'Cargando, por favor espere un momento' });
        void loading.present();
        this.http.marcarComoAtendida(this.id, "" + this.globalVar.puesto, this.descripcionAtendida).then(function (res) {
            // let novedadTmp = this.navParams.data.item
            // let date = new Date()
            // novedadTmp['descripcionAtendida'] = this.descripcionAtendida
            // novedadTmp['atendida'] = true
            // novedadTmp['fechaAtendida'] = date.toISOString()
            _this.globalVar.atenderNovedad = true;
            _this.globalVar.novedadesAtendidas.push(res.datos);
            _this.globalVar.cantidadNovedadesSinAtender = _this.globalVar.cantidadNovedadesSinAtender - 1;
            // ionic no permite reasignar globales, por esto se edita el mismo objeto
            for (var i = _this.globalVar.novedadesSinAtender.length - 1; i >= 0; --i) {
                if (_this.globalVar.novedadesSinAtender[i].id === _this.id) {
                    _this.globalVar.novedadesSinAtender.splice(i, 1);
                }
            }
            loading.dismissAll();
            void _this.navCtrl.pop();
        }, function (error) {
            console.log(error);
        });
    };
    AtenderNovedadPage.prototype.isNotEmpty = function (valor) {
        if (!valor || valor === '') {
            return false;
        }
        else {
            return true;
        }
    };
    AtenderNovedadPage.prototype.verifyButton = function () {
        if (this.isNotEmpty(this.descripcionAtendida)) {
            this.isenabled = true;
        }
        else {
            this.isenabled = false;
        }
    };
    AtenderNovedadPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-atender-novedad',
            templateUrl: 'atender-novedad.html'
        }),
        __metadata("design:paramtypes", [LoadingController, NavController, NavParams, HttpProvider, GlobalProvider])
    ], AtenderNovedadPage);
    return AtenderNovedadPage;
}());
export { AtenderNovedadPage };
//# sourceMappingURL=atender-novedad.js.map