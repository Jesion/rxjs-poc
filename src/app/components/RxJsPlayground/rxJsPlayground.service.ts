import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {Observable} from 'rxjs';
 
@Injectable()
export class RxJsPlaygroundStateService {

    public componentStateSub: ReplaySubject<ComponentModel>;

    constructor() {

    }

    public get model(): Observable<ComponentModel> {
        return (this.componentStateSub ? this.componentStateSub : this.createComponentState()).asObservable();
    }

    private createComponentState(): ReplaySubject<ComponentModel> {
        this.componentStateSub = new ReplaySubject<ComponentModel>(1);
        this.componentStateSub.next(ComponentModel.create('#CECECE', 'my label'));
        return this.componentStateSub;
    }
}

export class ComponentModel {

    constructor(public color: string, public text: string) {

    }

    public static create(color: string, text: string) {
        return new ComponentModel(color, text);
    }
}