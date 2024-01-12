import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'docente-pagina',
    loadChildren: () => import('./docente-pagina/docente-pagina.module').then( m => m.DocentePaginaPageModule)
  },
  {
    path: 'docente-qr',
    loadChildren: () => import('./docente-qr/docente-qr.module').then( m => m.DocenteQrPageModule)
  },
  {
    path: 'alumno-pagina',
    loadChildren: () => import('./alumno-pagina/alumno-pagina.module').then( m => m.AlumnoPaginaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
