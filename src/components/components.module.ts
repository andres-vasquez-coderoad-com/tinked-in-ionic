import {NgModule} from "@angular/core";
import {TinderUiComponent} from './tinder-ui/tinder-ui.component';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [],
    exports: [
        TinderUiComponent,
        HeaderComponent
    ],
    declarations: [TinderUiComponent, HeaderComponent]
})
export class ComponentsModule {
}
