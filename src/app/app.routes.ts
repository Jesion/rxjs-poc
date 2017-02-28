import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/RxJsPlaygroundContainer/container.component';

const routes: Routes = [
	{ path: '', redirectTo: 'rxjsPlayground', pathMatch: 'full' },
	{ path: 'rxjsPlayground', component: ContainerComponent }
];

export const routing = RouterModule.forRoot(routes);
