import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { GooglemapsComponent } from "./googlemaps/googlemaps.component";
import { LeafletmapsComponent } from './leafletmaps/leafletmaps.component';

const routes: Routes = [
  {
    path: '',
    children: [
      // {
      //     path: 'googlemaps',
      //     component: GooglemapsComponent
      // },
      {
        path: 'leafletmaps',
        component: LeafletmapsComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsRoutingModule {}
