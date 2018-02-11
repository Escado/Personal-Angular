import { Component, HostBinding } from '@angular/core' 
import { slideInFromLeftAnimation } from '../../../helpers/animations/slideInFromLeftAnimation';
import { fadeOutAnimation } from '../../../helpers/animations/fadeOutAnimation';

@Component ({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
    animations: [ fadeOutAnimation ]
})

export class ProfileComponent { 
  @HostBinding('@fadeOutAnimation') fadeOutAnimation = true;
}