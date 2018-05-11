var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';
import { RolesPage } from '../pages/roles/roles';
import { AgregarNovedadesPage } from '../pages/agregar-novedades/agregar-novedades';
import { PuestoDeTrabajoPage } from '../pages/puesto-de-trabajo/puesto-de-trabajo';
import { AreasDeTrabajoPage } from '../pages/areas-de-trabajo/areas-de-trabajo';
import { NovedadesSinAtenderPage } from '../pages/novedades-sin-atender/novedades-sin-atender';
import { AtenderNovedadPage } from '../pages/atender-novedad/atender-novedad';
import { EscogerPuestoTrabajoPage } from '../pages/escoger-puesto-trabajo/escoger-puesto-trabajo';
import { TabsPage } from '../pages/tabs/tabs';
import { NovedadesPage } from '../pages/novedades/novedades';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpProvider } from '../providers/http/http';
import { HttpModule } from '@angular/http';
import { GlobalProvider } from '../providers/global/global';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                RolesPage,
                AgregarNovedadesPage,
                PuestoDeTrabajoPage,
                AreasDeTrabajoPage,
                NovedadesSinAtenderPage,
                AtenderNovedadPage,
                EscogerPuestoTrabajoPage,
                TabsPage,
                NovedadesPage
            ],
            imports: [
                BrowserModule,
                HttpModule,
                IonicModule.forRoot(MyApp)
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                RolesPage,
                AgregarNovedadesPage,
                PuestoDeTrabajoPage,
                AreasDeTrabajoPage,
                NovedadesSinAtenderPage,
                AtenderNovedadPage,
                EscogerPuestoTrabajoPage,
                TabsPage,
                NovedadesPage
            ],
            providers: [
                Camera,
                StatusBar,
                SplashScreen,
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                HttpProvider,
                GlobalProvider
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map