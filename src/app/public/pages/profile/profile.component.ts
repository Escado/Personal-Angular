import { Component, HostBinding } from '@angular/core' 
import { fadeOutAnimation } from '../../../helpers/animations/fadeOutAnimation';

@Component ({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
    animations: [fadeOutAnimation],
    host: { '[@fadeOutAnimation]': '' }
})

export class ProfileComponent { 
}