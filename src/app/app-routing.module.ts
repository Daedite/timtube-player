import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VdoPlayerComponent} from "./components/vdo-player/vdo-player.component";

const routes: Routes = [
  {
    path: 'compose',
    component: VdoPlayerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
