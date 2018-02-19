import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent, RecoverPasswordComponent, ResetPasswordComponent } from './public-components.index';
import { PublicComponent } from './public.component';


const routes: Routes = [
  { path: '', component: PublicComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'recover', component: RecoverPasswordComponent },
      { path: 'reset', component: ResetPasswordComponent }
  ]
 },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    LoginComponent,
    RecoverPasswordComponent,
    ResetPasswordComponent,
    PublicComponent
  ]
})
export class PublicRoutingModule { }

export const routedComponents = [LoginComponent];