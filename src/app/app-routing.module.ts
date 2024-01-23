import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

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
    loadChildren: () => import('./docente-pagina/docente-pagina.module').then( m => m.DocentePaginaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'docente-qr',
    loadChildren: () => import('./docente-qr/docente-qr.module').then( m => m.DocenteQrPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'alumno-pagina',
    loadChildren: () => import('./alumno-pagina/alumno-pagina.module').then( m => m.AlumnoPaginaPageModule),
    canActivate: [AuthGuard]
  },
  { path: '**', loadChildren: () => import('./error-page/error-page.module').then( m => m.ErrorPagePageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
