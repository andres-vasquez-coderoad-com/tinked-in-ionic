import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HomePage} from './home.page';
import {HammerModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: HomePage,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        IonicModule,
        CommonModule,
        FormsModule,
        HammerModule
    ],
    declarations: [HomePage]
})
export class HomePageModule {
}
