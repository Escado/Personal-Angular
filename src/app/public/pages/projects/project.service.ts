import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { IProject } from './project.model'

@Injectable()
export class ProjectService {

    projects: IProject[] = [
        {
            name: "ŽŪMIS",
            description: "The first project i've worked on during my time at “Tieto Lietuva”. An overall amazing experience that introduced me to how things work in the IT industry.",
            technologies: ["Java", "JavaScript", "Groovyscript"],
            imageUrl: "assets/img/zumis.png",
            projectUrl: "https://zumis.lt/",
            projectUrlShort: "ŽŪMIS"
        },
        {
            name: "DriveAdvice",
            description: "",
            technologies: ["C#", "PostgreSQL", "AngularJS", "Dapper", "ASP.NET MVC Core"],
            imageUrl: "assets/img/DriveAdvice.png",
            projectUrl: "https://play.google.com/store/apps/details?id=lt.driveadvice.app&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BQ5Zk4RSGSridI8oHX1Ziqg%3D%3D",
            projectUrlShort: "Google play Link"
        },
        {
            name: "MediaPark Website",
            description: "",
            technologies: ["C#", "PostgreSQL", "AngularJS", "ASP.NET MVC Core", "Dapper"],
            imageUrl: "assets/img/mediapark_main.png",
            projectUrl: "http://www.mediapark.com/",
            projectUrlShort: "MediaPark"
        },
        {
            name: "MediaPark Admin Panel",
            description: "",
            technologies: ["C#", "PostgreSQL", "AngularJS", "Dapper"],
            imageUrl: "assets/img/mediapark_admin.png",
            projectUrl: "",
            projectUrlShort: ""
        },
        {
            name: "Estonian Art Index",
            description: "",
            technologies: ["C#", "PostgreSQL", "Dapper", "ASP.NET MVC Core"],
            imageUrl: "assets/img/artindex.png",
            projectUrl: "https://www.kunstiindeks.ee/",
            projectUrlShort: "ArtIndex"
        },
        {
            name: "eSpark",
            description: "",
            technologies: ["C#", "PostgreSQL", "AngularJS", "Dapper"],
            imageUrl: "assets/img/espark.png",
            projectUrl: "http://www.espark.lt/",
            projectUrlShort: "eSpark"
        },
        {
            name: "Archiving Solution",
            description: "While working at Danske Bank i've assisted the development of an in-house archiving solution. Based on configuration, selects tables from sql server, compresses their data and sends the data to secure storage.",
            technologies: ["C#", "Sql", "Sql Server", "KnockoutJS", "Web API", "ASP.NET MVC 5"],
            imageUrl: "",
            projectUrl: "",
            projectUrlShort: ""
        }
    ];

    constructor(private httpClient: HttpClient) {
    }

    /**
     * GetProjects: IProject[]
     */
    public GetProjects(): IProject[] {
        return this.projects;
    };


}