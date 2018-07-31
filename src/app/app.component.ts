import { Component, ViewChild } from '@angular/core'
import { Platform, MenuController, Nav } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import { GlobalProvider } from '../providers/global/global'

import { PuestoDeTrabajoPage } from '../pages/puesto-de-trabajo/puesto-de-trabajo'
import { TabsPage } from '../pages/tabs/tabs'
import { NovedadesPage } from '../pages/novedades/novedades'
import { AgregarNovedadesPage } from '../pages/agregar-novedades/agregar-novedades'
import { AreasDeTrabajoPage } from '../pages/areas-de-trabajo/areas-de-trabajo'
import { RolesPage } from '../pages/roles/roles'
import { EscogerPuestoTrabajoPage } from '../pages/escoger-puesto-trabajo/escoger-puesto-trabajo'

export interface PageInterface {
  title: string
  name: string
  component: any
  icon: string
  logsOut?: boolean
  index?: number
  tabName?: string
  tabComponent?: any
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav
  pages: Array<{ title: string, component: any }>
  tabsPages: PageInterface[] = [
    { title: 'Puesto', name: 'TabsPage', component: TabsPage, tabComponent: PuestoDeTrabajoPage, index: 0, icon: 'calendar' },
    { title: 'Novedades', name: 'TabsPage', component: TabsPage, tabComponent: NovedadesPage, index: 1, icon: 'contacts' },
    { title: 'CrearNovedad', name: 'TabsPage', component: TabsPage, tabComponent: AgregarNovedadesPage, index: 2, icon: 'map' }
  ]
  singlePages: PageInterface[] = [
    { title: 'Puestos', name: 'Puestos', component: EscogerPuestoTrabajoPage, icon: 'calendar' },
    { title: 'Areas', name: 'Areas', component: AreasDeTrabajoPage, icon: 'calendar' },
    { title: 'Roles', name: 'Roles', component: RolesPage, icon: 'calendar' }
  ]

  rootPage: any

  constructor (
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public global: GlobalProvider
  ) {
    this.rootPage = RolesPage
    this.platformReady()
    this.pages = [
      { title: 'Salir', component: RolesPage }
    ]

  }
  platformReady () {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault()
      this.splashScreen.hide()
    }).catch(error => {
      console.error(error)
    })
  }
  openPage (page: PageInterface) {

    let params = {}
    if (page.index) {
      params = { tabIndex: page.index }
    }
    if (this.nav.getActiveChildNavs().length && page.index !== undefined) {
      this.nav.getActiveChildNavs()[0].select(page.index)
    } else {
      this.nav.setRoot(page.component, params).catch((err: any) => {
        console.log(`Didn't set nav root: ${err}`)
      })
    }
    void this.menu.close()
    void this.nav.setRoot(page.component)
  }
}
