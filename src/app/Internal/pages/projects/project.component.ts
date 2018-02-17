import { Component, HostBinding, OnInit } from '@angular/core'
import { slideInFromLeftAnimation } from '../../../helpers/animations/slideInFromLeftAnimation';
import { fadeOutAnimation } from '../../../helpers/animations/fadeOutAnimation';
import { ProjectService } from './project.service';
import { IProject } from './project.model';

@Component({
  selector: 'projects',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  animations: [fadeOutAnimation],
  host: { '[@fadeOutAnimation]': '' }
})
export class ProjectComponent implements OnInit {

  _projectService: ProjectService
  projects: IProject[];

  constructor(projectService: ProjectService ) {
    this._projectService = projectService;
  }


  ngOnInit(): void {
    this.projects = this._projectService.GetProjects();
  }


}