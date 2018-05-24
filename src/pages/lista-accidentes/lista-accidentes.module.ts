import { NgModule } from '@angular/core'
import { IonicPageModule } from 'ionic-angular'
import { ListaAccidentesPage } from './lista-accidentes'

@NgModule({
  declarations: [
    ListaAccidentesPage
  ],
  imports: [
    IonicPageModule.forChild(ListaAccidentesPage)
  ]
})
export class ListaAccidentesPageModule {}
