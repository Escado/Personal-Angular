import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InternalRoutingModule } from './internal-routing.module'
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [

  ],
  imports: [
    InternalRoutingModule,
    CommonModule
  ],
  providers: [],
})
export class InternalModule { }
