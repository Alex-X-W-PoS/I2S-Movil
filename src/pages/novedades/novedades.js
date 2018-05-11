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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { AtenderNovedadPage } from '../atender-novedad/atender-novedad';
import moment from 'moment';
var NovedadesPage = /** @class */ (function () {
    function NovedadesPage(navCtrl, navParams, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.global = global;
        this.segment = 'sinAtender';
        this.queryText = '';
        this.queryTextNoAtendidas = '';
        moment.locale('es');
    }
    NovedadesPage.prototype.ionViewDidLoad = function () {
        this.initializeItems();
        this.initializeItemsAtendidos();
    };
    NovedadesPage.prototype.initializeItems = function () {
        this.items = this.global.novedadesSinAtender;
    };
    NovedadesPage.prototype.initializeItemsAtendidos = function () {
        this.itemAtendidos = this.global.novedadesAtendidas;
    };
    NovedadesPage.prototype.time = function (fecha) {
        return moment(fecha).fromNow();
    };
    NovedadesPage.prototype.timeAtendida = function (fechaInicio, fechaFin) {
        var a = moment(fechaInicio);
        var b = moment(fechaFin);
        return a.to(b, true);
    };
    NovedadesPage.prototype.filterNovedadesSinAtender = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        if (val && val.trim() !== '') {
            this.items = this.items.filter(function (item) {
                return (item.descripcion.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    NovedadesPage.prototype.filterAtendidas = function (ev) {
        this.initializeItemsAtendidos();
        var val = ev.target.value;
        if (val && val.trim() !== '') {
            this.itemAtendidos = this.itemAtendidos.filter(function (item) {
                return (item.descripcion.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    NovedadesPage.prototype.detallesNovedades = function (item) {
        void this.navCtrl.push(AtenderNovedadPage, { item: item, 'puesto': this.navParams.get('puestoId') });
    };
    NovedadesPage.prototype.novedadesPrioridad = function (novedades, prioridad) {
        for (var i = novedades.length - 1; i >= 0; --i) {
            if (novedades[i].prioridad === prioridad) {
                return true;
            }
        }
        return false;
    };
    NovedadesPage.prototype.swipeEvent = function (e) {
        // devido a problemas con el swipe al hacer hacia abajo
        // se debe usar la propiedad angle para determinar
        // cuando se hace para la derecha o izquierda.
        // Se la encontro usando console.log(`${JSON.stringify(e)}`)
        var ANGULO_DERECHA_MINIMO = 0;
        var ANGULO_IZQUIERDA_MAXIMO = 10;
        if (e.direction === 2 && e.angle > ANGULO_DERECHA_MINIMO) {
            this.segment = 'atendidas';
        }
        else if (e.direction === 4 && e.angle < ANGULO_IZQUIERDA_MAXIMO) {
            this.segment = 'sinAtender';
        }
    };
    NovedadesPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-novedades',
            templateUrl: 'novedades.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams, GlobalProvider])
    ], NovedadesPage);
    return NovedadesPage;
}());
export { NovedadesPage };
//# sourceMappingURL=novedades.js.map