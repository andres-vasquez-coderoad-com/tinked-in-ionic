import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule, HammerModule} from '@angular/platform-browser';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {RouteReuseStrategy} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HomePage} from '../pages/home/home.page';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        IonicModule.forRoot(),
        HammerModule,
        AppRoutingModule,
        FontAwesomeModule,
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        {
            provide: RouteReuseStrategy, useClass: IonicRouteStrategy,
        },
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule {
}
