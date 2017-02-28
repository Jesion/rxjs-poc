import { 
    NgModule 
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from './components/RxJsPlaygroundContainer/container.component';
import { RxJsPlaygroundComponent } from './components/RxJsPlayground/rxJsPlayground.component';
import { routing } from './app.routes';
import { RxJsPlaygroundStateService } from './components/RxJsPlayground/rxJsPlayground.service'; 

@NgModule({
    declarations: [ 
        AppComponent,
        ContainerComponent,
        RxJsPlaygroundComponent           
    ],
    imports: [ 
        routing,
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule         
    ],   
    providers: [
        RxJsPlaygroundStateService
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {
    
}
