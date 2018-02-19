import { Component, HostBinding } from '@angular/core'
import { fadeOutAnimation } from '../../../helpers/animations/fadeOutAnimation';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  animations: [fadeOutAnimation],
  host: { '[@fadeOutAnimation]': '' }
})

export class EducationComponent {
}