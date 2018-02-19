import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { PublicModule } from './public/public.module'
import { InternalModule } from './internal/internal.module';

import { AppComponent } from './app.component';

import { ProjectService } from './public/pages/projects/project.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  { path: '', loadChildren: './public/public.module#PublicModule' }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    PublicModule,
    InternalModule,
    
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    ProjectService,
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
