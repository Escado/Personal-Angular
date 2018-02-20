import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent, RecoverPasswordComponent, ResetPasswordComponent } from './account-components.index';
import { AccountComponent } from './account.component';


const routes: Routes = [
  { 
    path: 'account', component: AccountComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'recover', component: RecoverPasswordComponent },
      { path: 'reset', component: ResetPasswordComponent }
  ]
 }
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
    AccountComponent
  ]
})
export class AccountRoutingModule { }