import { Component, HostBinding } from '@angular/core' 
import { fadeOutAnimation } from '../../helpers/animations/fadeOutAnimation';

@Component ({
    moduleId: module.id.toString(),
    selector: 'index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css'],
    animations: [ fadeOutAnimation ],
    host: { '[@fadeOutAnimation]': '' }
})

export class IndexComponent {

}