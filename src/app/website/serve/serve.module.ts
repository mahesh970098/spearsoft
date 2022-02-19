import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServeRoutingModule } from './serve-routing.module';
import { ServeComponent } from './serve/serve.component';


@NgModule({
  declarations: [
    ServeComponent
  ],
  imports: [
    CommonModule,
    ServeRoutingModule
  ]
})
export class ServeModule { }
