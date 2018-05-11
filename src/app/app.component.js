var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GlobalProvider } from '../providers/global/global';
import { PuestoDeTrabajoPage } from '../pages/puesto-de-trabajo/puesto-de-trabajo';
import { TabsPage } from '../pages/tabs/tabs';
import { NovedadesPage } from '../pages/novedades/novedades';
import { AgregarNovedadesPage } from '../pages/agregar-novedades/agregar-novedades';
import { AreasDeTrabajoPage } from '../pages/areas-de-trabajo/areas-de-trabajo';
import { RolesPage } from '../pages/roles/roles';
import { EscogerPuestoTrabajoPage } from '../pages/escoger-puesto-trabajo/escoger-puesto-trabajo';
var MyApp = /** @class */ (function () {
    function MyApp(platform, menu, statusBar, splashScreen, global) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.global = global;
        this.tabsPages = [
            { title: 'Puesto', name: 'TabsPage', component: TabsPage, tabComponent: PuestoDeTrabajoPage, index: 0, icon: 'calendar' },
            { title: 'Novedades', name: 'TabsPage', component: TabsPage, tabComponent: NovedadesPage, index: 1, icon: 'contacts' },
            { title: 'CrearNovedad', name: 'TabsPage', component: TabsPage, tabComponent: AgregarNovedadesPage, index: 2, icon: 'map' }
        ];
        this.singlePages = [
            { title: 'Puestos', name: 'Puestos', component: EscogerPuestoTrabajoPage, icon: 'calendar' },
            { title: 'Areas', name: 'Areas', component: AreasDeTrabajoPage, icon: 'calendar' },
            { title: 'Roles', name: 'Roles', component: RolesPage, icon: 'calendar' }
        ];
        this.rootPage = RolesPage;
        this.platformReady();
        this.pages = [
            { title: 'Roles Page', component: RolesPage }
        ];
    }
    MyApp.prototype.platformReady = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        }).catch(function (error) {
            console.error(error);
        });
    };
    MyApp.prototype.openPage = function (page) {
        var params = {};
        if (page.index) {
            params = { tabIndex: page.index };
        }
        if (this.nav.getActiveChildNavs().length && page.index !== undefined) {
            this.nav.getActiveChildNavs()[0].select(page.index);
        }
        else {
            this.nav.setRoot(page.component, params).catch(function (err) {
                console.log("Didn't set nav root: " + err);
            });
        }
        void this.menu.close();
        void this.nav.setRoot(page.component);
    };
    __decorate([
        ViewChild(Nav),
        __metadata("design:type", Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Component({
            templateUrl: 'app.html'
        }),
        __metadata("design:paramtypes", [Platform,
            MenuController,
            StatusBar,
            SplashScreen,
            GlobalProvider])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map