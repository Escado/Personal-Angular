import { Component, HostBinding } from '@angular/core'
import { fadeOutAnimation } from '../../../helpers/animations/fadeOutAnimation';

@Component({
    selector: 'experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css'],
    animations: [fadeOutAnimation],
    host: { '[@fadeOutAnimation]': '' }
})

export class ExperienceComponent {
} 