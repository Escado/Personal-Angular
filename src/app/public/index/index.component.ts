import { Component, HostBinding } from '@angular/core' 
import { fadeOutAnimation } from '../../helpers/animations/fadeOutAnimation';
import { slideInFromLeftAnimation } from '../../helpers/animations/slideInFromLeftAnimation';

@Component ({
    moduleId: module.id.toString(),
    selector: 'index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css'],
    animations: [ slideInFromLeftAnimation ],
    host: { '[@slideInFromLeftAnimation]': '' }
})

export class IndexComponent {
    constructor() {

    }
}