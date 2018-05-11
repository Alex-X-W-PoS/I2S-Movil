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
import { NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { PuestoDeTrabajoPage } from '../puesto-de-trabajo/puesto-de-trabajo';
import { AgregarNovedadesPage } from '../agregar-novedades/agregar-novedades';
import { NovedadesPage } from '../novedades/novedades';
var TabsPage = /** @class */ (function () {
    function TabsPage(navParams, global) {
        this.global = global;
        this.tabPuestoDeTrabajo = PuestoDeTrabajoPage;
        this.tabAgregarNovedades = AgregarNovedadesPage;
        this.tabNovedades = NovedadesPage;
        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        this.global.enPuestoDeTrabajo = true;
    };
    TabsPage = __decorate([
        Component({
            selector: 'page-tabs',
            templateUrl: 'tabs.html'
        }),
        __metadata("design:paramtypes", [NavParams, GlobalProvider])
    ], TabsPage);
    return TabsPage;
}());
export { TabsPage };
//# sourceMappingURL=tabs.js.map