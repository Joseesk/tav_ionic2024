import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnoPaginaPageRoutingModule } from './alumno-pagina-routing.module';

import { AlumnoPaginaPage } from './alumno-pagina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnoPaginaPageRoutingModule
  ],
  declarations: [AlumnoPaginaPage]
})
export class AlumnoPaginaPageModule {}
