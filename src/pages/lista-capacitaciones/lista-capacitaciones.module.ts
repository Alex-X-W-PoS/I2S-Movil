import { NgModule } from '@angular/core'
import { IonicPageModule } from 'ionic-angular'
import { ListaCapacitacionesPage } from './lista-capacitaciones'

@NgModule({
  declarations: [
    ListaCapacitacionesPage
  ],
  imports: [
    IonicPageModule.forChild(ListaCapacitacionesPage)
  ]
})
export class ListaCapacitacionesPageModule {}
