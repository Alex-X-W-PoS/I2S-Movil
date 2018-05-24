import { BrowserModule } from '@angular/platform-browser'
import { NgModule, ErrorHandler } from '@angular/core'
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular'
import { MyApp } from './app.component'
import { Camera } from '@ionic-native/camera'
import { BarcodeScanner } from '@ionic-native/barcode-scanner'

import { RolesPage } from '../pages/roles/roles'
import { AgregarNovedadesPage } from '../pages/agregar-novedades/agregar-novedades'
import { PuestoDeTrabajoPage } from '../pages/puesto-de-trabajo/puesto-de-trabajo'
import { AreasDeTrabajoPage } from '../pages/areas-de-trabajo/areas-de-trabajo'
import { NovedadesSinAtenderPage } from '../pages/novedades-sin-atender/novedades-sin-atender'
import { AtenderNovedadPage } from '../pages/atender-novedad/atender-novedad'
import { EscogerPuestoTrabajoPage } from '../pages/escoger-puesto-trabajo/escoger-puesto-trabajo'
import { TabsPage } from '../pages/tabs/tabs'
import { NovedadesPage } from '../pages/novedades/novedades'
import { EscanerQRPage } from '../pages/escaner-qr/escaner-qr'
import { CapacitacionesPage } from '../pages/capacitaciones/capacitaciones'
import { AccidentesPage } from '../pages/accidentes/accidentes'
import { ListaAccidentesPage } from '../pages/lista-accidentes/lista-accidentes'

import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import { HttpProvider } from '../providers/http/http'
import { HttpModule } from '@angular/http'

import { GlobalProvider } from '../providers/global/global'

@NgModule({
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
    NovedadesPage,
    EscanerQRPage,
    CapacitacionesPage,
    AccidentesPage,
    ListaAccidentesPage
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
    NovedadesPage,
    EscanerQRPage,
    CapacitacionesPage,
    AccidentesPage,
    ListaAccidentesPage
  ],
  providers: [
    Camera,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HttpProvider,
    GlobalProvider,
    BarcodeScanner
  ]
})
export class AppModule { }
