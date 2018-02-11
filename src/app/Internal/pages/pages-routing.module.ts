import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { EducationComponent, ExperienceComponent, ProfileComponent, ProjectsComponent } from "./pages-components-bucket";
import { PagesComponent } from "./pages.component";

const pagesRoutes: Routes = [
    {
        path: 'pages', component: PagesComponent, children: [
            { path: 'profile', component: ProfileComponent },
            { path: 'education', component: EducationComponent },
            { path: 'experience', component: ExperienceComponent },
            { path: 'projects', component: ProjectsComponent },
            { path: '**', redirectTo: 'profile', pathMatch: 'full' }
        ]
    }

];

@NgModule({
    declarations: [
        ProfileComponent,
        EducationComponent,
        ExperienceComponent,
        ProjectsComponent
    ],
    imports: [
        RouterModule.forChild(pagesRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class PagesRoutingModule { }