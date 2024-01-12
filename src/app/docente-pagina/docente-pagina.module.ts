import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocentePaginaPageRoutingModule } from './docente-pagina-routing.module';

import { DocentePaginaPage } from './docente-pagina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocentePaginaPageRoutingModule
  ],
  declarations: [DocentePaginaPage]
})
export class DocentePaginaPageModule {}
