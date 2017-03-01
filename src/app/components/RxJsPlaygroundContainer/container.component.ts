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

    onClick() {
      this.service.componentStateSub.next( ComponentModel.create('#0000ff', 'This is an updated label') );
    } 

    onSecondClick() {
      this.service.componentStateSubBS.next( ComponentModel.create('#ff0000', 'Changed that again') );
    }
} 