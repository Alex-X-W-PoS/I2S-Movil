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
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { AgregarNovedadesPage } from '../agregar-novedades/agregar-novedades';
import { AtenderNovedadPage } from '../atender-novedad/atender-novedad';
import { HttpProvider } from '../../providers/http/http';
import { GlobalProvider } from '../../providers/global/global';
var NovedadesSinAtenderPage = /** @class */ (function () {
    function NovedadesSinAtenderPage(toastCtrl, loadingController, navCtrl, navParams, rolUsuario, alertCtrl, http) {
        this.toastCtrl = toastCtrl;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rolUsuario = rolUsuario;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.mensajeExito = '';
        this.color = 'red';
        this.title = 'Novedades Sin Atender';
        this.puesto = navParams.get('puestoId');
        if (navParams && navParams.get('mensaje') !== '') {
            this.mensajeExito = navParams.get('mensaje');
            this.cargarNovedades();
            this.usuario = rolUsuario.claseUsuario;
        }
    }
    NovedadesSinAtenderPage.prototype.ionViewDidEnter = function () {
        if (this.rolUsuario.crearNovedad === true) {
            this.rolUsuario.atenderNovedad = false;
            this.rolUsuario.crearNovedad = false;
            var toast = this.toastCtrl.create({
                message: 'Novedad agregada exitosamente',
                duration: 2000,
                position: 'bottom'
            });
            void toast.present();
        }
        this.cargarNovedades();
    };
    NovedadesSinAtenderPage.prototype.agregarNovedades = function () {
        void this.navCtrl.push(AgregarNovedadesPage, { item: this.navParams.get('puestoId') });
    };
    NovedadesSinAtenderPage.prototype.regresar = function () {
        void this.navCtrl.pop();
    };
    NovedadesSinAtenderPage.prototype.cargarNovedades = function () {
        var _this = this;
        var loading = this.loadingController.create({ content: 'Cargando, por favor espere un momento' });
        void loading.present();
        this.http.obetenerNovedadesSinAtender(this.puesto).then(function (res) {
            _this.novedades = res.datos;
            _this.size = _this.novedades.length;
            loading.dismissAll();
        }, function (error) {
            console.log(error);
        });
        // this.novedades.sort(sortfunction)
        // this.novedades = [{"id":2,"puesto_trabajo_id":1,"descripcion":"El operario no usa guantes","prioridad":"media","foto_url":"https://i.imgur.com/E4S80tP.jpg","atendida":false,"fechaCreacion":"2018-01-23T04:03:48.060Z"},{"id":3,"puesto_trabajo_id":1,"descripcion":"Las sillas no estan pintadas","prioridad":"baja","foto_url":"https://i.imgur.com/U0ueJED.jpg","atendida":false,"fechaCreacion":"2018-01-23T04:03:48.060Z"},{"id":1,"puesto_trabajo_id":1,"descripcion":"No esta bien aislado el cable","prioridad":"urgente","foto_url":"https://i.imgur.com/YrQ2Aqz.jpg","atendida":true,"fechaCreacion":"2018-01-23T04:03:48.060Z","descripcionAtendida":"Se atendio"}]
        // this.size = this.novedades.length
    };
    NovedadesSinAtenderPage.prototype.detallesNovedades = function (item) {
        void this.navCtrl.push(AtenderNovedadPage, { item: item, 'puesto': this.navParams.get('puestoId') });
    };
    NovedadesSinAtenderPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-novedades-sin-atender',
            templateUrl: 'novedades-sin-atender.html'
        }),
        __metadata("design:paramtypes", [ToastController, LoadingController, NavController, NavParams, GlobalProvider, AlertController, HttpProvider])
    ], NovedadesSinAtenderPage);
    return NovedadesSinAtenderPage;
}());
export { NovedadesSinAtenderPage };
//# sourceMappingURL=novedades-sin-atender.js.map