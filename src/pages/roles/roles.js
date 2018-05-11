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
import { AreasDeTrabajoPage } from '../areas-de-trabajo/areas-de-trabajo';
var RolesPage = /** @class */ (function () {
    function RolesPage(navCtrl, navParams, rolUsuario) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rolUsuario = rolUsuario;
        this.text = '2';
    }
    RolesPage.prototype.selectInspector = function () {
        this.rolUsuario.claseUsuario = 0;
        void this.navCtrl.push(AreasDeTrabajoPage);
    };
    RolesPage.prototype.selectJefe = function () {
        this.rolUsuario.claseUsuario = 1;
        void this.navCtrl.push(AreasDeTrabajoPage);
    };
    RolesPage.prototype.selectEmpleado = function () {
        this.rolUsuario.claseUsuario = 2;
        void this.navCtrl.push(AreasDeTrabajoPage);
    };
    RolesPage.prototype.ionViewDidLoad = function () {
        this.rolUsuario.enPuestoDeTrabajo = false;
    };
    RolesPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-roles',
            templateUrl: 'roles.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams, GlobalProvider])
    ], RolesPage);
    return RolesPage;
}());
export { RolesPage };
//# sourceMappingURL=roles.js.map