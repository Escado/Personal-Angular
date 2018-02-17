import { Component, HostBinding } from '@angular/core' 
import { slideInFromTopAnimation } from '../../../helpers/animations/slideInFromTopAnimation';

@Component ({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    animations: [ slideInFromTopAnimation ],
    host: { '[@slideInFromTopAnimation]': '' }
})

export class NavBarComponent {
    public toggled: boolean;
} 