import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ResultComponent } from './components/result/result.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:query', component: ResultComponent },
  { path: 'detail/:id', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaceRoutingModule { }
