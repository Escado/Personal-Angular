import { Component } from '@angular/core';
import { fadeOutAnimation } from '../helpers/animations/fadeOutAnimation';

@Component({
  selector: 'public-root',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css'],
  animations: [ fadeOutAnimation ],
  host: { '[@fadeOutAnimation]': '' }
})
export class PublicComponent {

} 
