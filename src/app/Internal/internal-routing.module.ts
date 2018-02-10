import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InternalComponent } from './internal.component'

import { ProjectsComponent, ProfileComponent, EducationComponent, ExperienceComponent, IndexComponent } from './internal-components-bucket'

const appRoutes: Routes = [
  { path: '', component: InternalComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'index', component: IndexComponent }

];

@NgModule({
  declarations: [
    InternalComponent,
    ProjectsComponent,
    ProfileComponent,
    EducationComponent,
    ExperienceComponent,
    IndexComponent
  ],
  imports: [ 
    RouterModule.forChild(appRoutes),
    
  ],
  providers: [],

  exports: [ RouterModule ]
})
export class InternalRoutingModule { }
