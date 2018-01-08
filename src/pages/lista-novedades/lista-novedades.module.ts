import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaNovedadesPage } from './lista-novedades';
import { HttpModule } from '@angular/http'

@NgModule({
  declarations: [
    ListaNovedadesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaNovedadesPage),
  ],
    providers: [
  	
  ]
})
export class ListaNovedadesPageModule {}
