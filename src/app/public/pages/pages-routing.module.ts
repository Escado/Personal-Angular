import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { EducationComponent, ExperienceComponent, ProfileComponent, ProjectComponent } from "./pages-components-bucket";
import { PagesComponent } from "./pages.component";
import { CommonModule } from "@angular/common";

const pagesRoutes: Routes = [
    {
        path: 'pages', component: PagesComponent, children: [
            { path: 'profile', component: ProfileComponent },
            { path: 'education', component: EducationComponent },
            { path: 'experience', component: ExperienceComponent },
            { path: 'projects', component: ProjectComponent },
            { path: '**', redirectTo: 'profile', pathMatch: 'full' }
        ]
    }
];

@NgModule({
    declarations: [
        ProfileComponent,
        EducationComponent,
        ExperienceComponent,
        ProjectComponent
    ],
    imports: [
        RouterModule.forChild(pagesRoutes),
        CommonModule
    ],
    exports: [
        RouterModule
    ]
})

export class PagesRoutingModule { }