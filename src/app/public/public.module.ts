import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicRoutingModule } from './public-routing.module'
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [

  ],
  imports: [
    PublicRoutingModule,
    CommonModule
  ],
  providers: [],
})
export class PublicModule { }
