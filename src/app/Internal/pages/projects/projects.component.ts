import { Component, HostBinding } from '@angular/core'
import { slideInFromLeftAnimation } from '../../../helpers/animations/slideInFromLeftAnimation';
import { fadeOutAnimation } from '../../../helpers/animations/fadeOutAnimation';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [fadeOutAnimation],
  host: {
    '[style.display]': 'block'
  }
})

export class ProjectsComponent {
  @HostBinding('@fadeOutAnimation') fadeOutAnimation = true;
}