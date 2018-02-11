import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { InternalModule } from './Internal/internal.module'
import { AppComponent } from './app.component';


const appRoutes: Routes = [
  { path: '', loadChildren: './Internal/internal.module#InternalModule' }

];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    InternalModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
