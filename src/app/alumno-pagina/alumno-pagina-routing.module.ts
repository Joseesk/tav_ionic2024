import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnoPaginaPage } from './alumno-pagina.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnoPaginaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnoPaginaPageRoutingModule {}
