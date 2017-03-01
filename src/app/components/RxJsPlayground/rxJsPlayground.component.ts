import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RxJsPlaygroundStateService, ComponentModel } from './rxJsPlayground.service';

@Component({
  selector: 'rxjs-playground',
  styleUrls: ['app/components/RxJsPlayground/rxJsPlayground.component.css'],
  templateUrl: 'app/components/RxJsPlayground/rxJsPlayground.component.html'
})
export class RxJsPlaygroundComponent implements OnInit {

    @Input() state: ComponentModel;

    @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

    constructor() {

    }

    ngOnInit() {
      
    }   

    onButtonClick() {
      this.onClick.emit();
    }
}