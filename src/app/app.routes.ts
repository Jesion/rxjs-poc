import { RouterModule, Routes } from '@angular/router';
import { RxJsPlaygroundComponent } from './components/RxJsPlayground/rxJsPlayground.component';

const routes: Routes = [
	{ path: '', redirectTo: 'rxjsPlayground', pathMatch: 'full' },
	{ path: 'rxjsPlayground', component: RxJsPlaygroundComponent }
];

export const routing = RouterModule.forRoot(routes);
