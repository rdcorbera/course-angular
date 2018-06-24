import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityModule } from '../security/security.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PlaceRoutingModule } from './place-routing.module';

import { PlaceService } from './services/place.service';

import { HomeComponent } from './components/home/home.component';
import { ResultComponent } from './components/result/result.component';
import { DetailComponent } from './components/detail/detail.component';
import { NewComponent } from './components/new/new.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SecurityModule,
    PlaceRoutingModule
  ],
  declarations: [
    HomeComponent,
    ResultComponent,
    DetailComponent,
    NewComponent
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
