import { Component, HostBinding } from "@angular/core";
import { fadeOutAnimation } from "../../helpers/animations/fadeOutAnimation";

@Component({
    selector: '',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.css'],
    animations: [fadeOutAnimation],
})

export class PagesComponent {
}