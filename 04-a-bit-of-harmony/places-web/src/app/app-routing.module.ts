import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/places', pathMatch: 'full' },
  { path: 'places', loadChildren: 'app/place/place.module#PlaceModule' },
  { path: 'account', loadChildren: 'app/account/account.module#AccountModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
