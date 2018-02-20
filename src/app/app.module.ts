import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { PublicModule } from './public/public.module'
import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';

import { ProjectService } from './public/pages/projects/project.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  { path: '', loadChildren: './public/public.module#PublicModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    PublicModule,
    AdminModule,
    
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
