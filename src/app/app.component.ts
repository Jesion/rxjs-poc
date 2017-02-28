import {Component} from '@angular/core';
import {RxJsPlaygroundStateService, ComponentModel} from './components/RxJsPlayground/rxJsPlayground.service';

@Component({
	selector: 'app',
	templateUrl: 'app/app.component.html',
	styleUrls: ['app/app.component.css']	
})

export class AppComponent {

	constructor(public state: RxJsPlaygroundStateService) {

	}
}
