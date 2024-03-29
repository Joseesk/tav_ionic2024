import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocenteQrPage } from './docente-qr.page';

const routes: Routes = [
  {
    path: '',
    component: DocenteQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocenteQrPageRoutingModule {}
