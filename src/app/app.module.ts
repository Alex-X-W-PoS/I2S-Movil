import { BrowserModule } from '@angular/platform-browser'
import { NgModule, ErrorHandler } from '@angular/core'
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular'
import { MyApp } from './app.component'
import { Camera } from '@ionic-native/camera'

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { RolesPage } from '../pages/roles/roles';
import { AgregarNovedadesPage } from '../pages/agregar-novedades/agregar-novedades';
import { PuestoDeTrabajoPage } from '../pages/puesto-de-trabajo/puesto-de-trabajo';
import { AreasDeTrabajoPage } from '../pages/areas-de-trabajo/areas-de-trabajo';
import { NovedadesSinAtenderPage } from '../pages/novedades-sin-atender/novedades-sin-atender'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpProvider } from '../providers/http/http';
import { HttpModule } from '@angular/http';
import { GlobalProvider } from '../providers/global/global';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    RolesPage,
    AgregarNovedadesPage,
    PuestoDeTrabajoPage,
    AreasDeTrabajoPage,
    NovedadesSinAtenderPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    RolesPage,
    AgregarNovedadesPage,
    PuestoDeTrabajoPage,
    AreasDeTrabajoPage,
    NovedadesSinAtenderPage
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
export class AppModule { }
