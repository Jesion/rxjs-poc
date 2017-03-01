import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs';
 
@Injectable()
export class RxJsPlaygroundStateService {

    public componentStateSub: ReplaySubject<ComponentModel>;

    public componentStateSubBS: BehaviorSubject<ComponentModel>;

    constructor() {

    }

    public get model(): Observable<ComponentModel> {
        return (this.componentStateSub ? this.componentStateSub : this.createComponentState()).asObservable();
    }

    public get modelBs(): Observable<ComponentModel> {
        return (this.componentStateSubBS ? this.componentStateSubBS : this.createComponentStateBS()).asObservable();
    }

    private createComponentState(): ReplaySubject<ComponentModel> {
        this.componentStateSub = new ReplaySubject<ComponentModel>(1);
        this.componentStateSub.next(ComponentModel.create('#CECECE', 'my label'));
        return this.componentStateSub;
    }

    private createComponentStateBS(): BehaviorSubject<ComponentModel> {
        this.componentStateSubBS = new BehaviorSubject<ComponentModel>(null);
        this.componentStateSubBS.next(ComponentModel.create('#DEDEDE', 'text label'));
        return this.componentStateSubBS;
    }
}

export class ComponentModel {

    constructor(public color: string, public text: string) {

    }

    public static create(color: string, text: string) {
        return new ComponentModel(color, text);
    }
}