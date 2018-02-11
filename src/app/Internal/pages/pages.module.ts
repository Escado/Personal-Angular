import { NgModule } from '@angular/core'

import { PagesRoutingModule } from './pages-routing.module'
import { PagesComponent } from './pages.component';
import { NavBarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PagesComponent,
    NavBarComponent
  ],
  imports: [
    PagesRoutingModule,
    CommonModule
  ],
  providers: [],
})

export class PagesModule { }