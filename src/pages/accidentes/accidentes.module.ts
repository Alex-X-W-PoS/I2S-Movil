import { NgModule } from '@angular/core'
import { IonicPageModule } from 'ionic-angular'
import { AccidentesPage } from './accidentes'

@NgModule({
  declarations: [
    AccidentesPage
  ],
  imports: [
    IonicPageModule.forChild(AccidentesPage)
  ]
})
export class AccidentesPageModule {}
