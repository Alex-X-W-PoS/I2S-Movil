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
import { HttpProvider } from '../../providers/http/http';
import { GlobalProvider } from '../../providers/global/global';
import { EscogerPuestoTrabajoPage } from '../escoger-puesto-trabajo/escoger-puesto-trabajo';
var AreasDeTrabajoPage = /** @class */ (function () {
    function AreasDeTrabajoPage(loadingController, navCtrl, navParams, puestos, rolUsuario) {
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.puestos = puestos;
        this.rolUsuario = rolUsuario;
        this.user = rolUsuario.claseUsuario;
        this.isenabled = false;
    }
    AreasDeTrabajoPage.prototype.entrarPuestosDeTrabajo = function (areaId) {
        var _this = this;
        this.rolUsuario.area = areaId;
        if (areaId === '1') {
            this.rolUsuario.areaNombre = 'Administrativa';
        }
        else if (areaId === '2') {
            this.rolUsuario.areaNombre = 'Matricería';
        }
        else if (areaId === '3') {
            this.rolUsuario.areaNombre = 'Inyección';
        }
        var loading = this.loadingController.create({ content: 'Cargando, por favor espere un momento' });
        void loading.present();
        this.puestos.obtenerPuestoDeTrabajoDeArea(areaId).then(function (res) {
            loading.dismissAll();
            void _this.navCtrl.push(EscogerPuestoTrabajoPage, res.datos);
        }, function (error) {
            console.log(error);
        });
    };
    AreasDeTrabajoPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-areas-de-trabajo',
            templateUrl: 'areas-de-trabajo.html'
        }),
        __metadata("design:paramtypes", [LoadingController, NavController, NavParams, HttpProvider, GlobalProvider])
    ], AreasDeTrabajoPage);
    return AreasDeTrabajoPage;
}());
export { AreasDeTrabajoPage };
//# sourceMappingURL=areas-de-trabajo.js.map