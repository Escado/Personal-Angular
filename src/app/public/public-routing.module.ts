import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicComponent } from './public.component'

import { PagesModule } from './pages/pages.module';
import { IndexComponent } from './index/index.component';

const appRoutes: Routes = [
  { path: 'intro', component: PublicComponent },
  { path: 'index', component: IndexComponent },
  { path: 'pages', loadChildren: './pages/pages.module#PagesModule' },
  { path: '', redirectTo: 'intro', pathMatch: 'full' }

];

@NgModule({
  declarations: [
    PublicComponent,
    IndexComponent
  ],
  imports: [
    RouterModule.forChild(appRoutes),
    PagesModule
  ],
  providers: [],

  exports: [RouterModule]
})
export class PublicRoutingModule { }
