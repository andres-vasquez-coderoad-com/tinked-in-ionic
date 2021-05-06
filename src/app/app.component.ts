import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Platform} from '@ionic/angular';
import {environment} from '../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    constructor(platform: Platform, translate: TranslateService) {
        translate.setDefaultLang('es');
        translate.use('es');

        platform.ready().then(() => {
            if (platform.is('android')) {
                TestFairy.begin(environment.testFairyToken);
            }
        });
    }
}
