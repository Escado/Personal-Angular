import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InternalComponent } from './internal.component'

import { IndexComponent } from './internal-components-bucket'
import { PagesModule } from './pages/pages.module';

const appRoutes: Routes = [
  { path: 'intro', component: InternalComponent },
  { path: 'index', component: IndexComponent },
  { path: 'pages', loadChildren: './pages/pages.module#PagesModule' },
  { path: '', redirectTo: 'intro', pathMatch: 'full' }

];

@NgModule({
  declarations: [
    InternalComponent,
    IndexComponent
  ],
  imports: [
    RouterModule.forChild(appRoutes),
    PagesModule
  ],
  providers: [],

  exports: [RouterModule]
})
export class InternalRoutingModule { }
