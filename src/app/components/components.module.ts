import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { PickupCallCardComponent } from './pickup-call-card/pickup-call-card.component';
import { ErrorMessageComponent } from './error-message/error-message.component';



@NgModule({
  declarations: [
    PickupCallCardComponent,
    ErrorMessageComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    PickupCallCardComponent,
    ErrorMessageComponent
  ]
})
export class ComponentsModule { }
