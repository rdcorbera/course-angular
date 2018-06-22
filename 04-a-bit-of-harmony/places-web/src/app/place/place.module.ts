import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceRoutingModule } from './place-routing.module';

import { PlaceService } from './services/place.service';

import { HomeComponent } from './components/home/home.component';
import { ResultComponent } from './components/result/result.component';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    PlaceRoutingModule
  ],
  declarations: [
    HomeComponent,
    ResultComponent,
    DetailComponent
  ],
  exports: [
    HomeComponent,
    ResultComponent,
    DetailComponent
  ],
  providers: [
    PlaceService
  ]
})
export class PlaceModule { }
