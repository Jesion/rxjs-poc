import { Component, OnInit, Input } from '@angular/core';
import { RxJsPlaygroundStateService, ComponentModel } from '../RxJsPlayground/rxJsPlayground.service';

@Component({
  selector: 'rxjs-playground-container',
  templateUrl: 'app/components/RxJsPlaygroundContainer/container.component.html'
})
export class ContainerComponent implements OnInit {

    constructor(private service: RxJsPlaygroundStateService) {

    }

    ngOnInit() {
      
    }    
} 