import {AnalyticsServiceI} from './analytics-i.service';
import {Injectable} from '@angular/core';
import {FirebaseAnalytics} from '@ionic-native/firebase-analytics/ngx';
import {Device} from '@ionic-native/device/ngx';

@Injectable({
    providedIn: 'root'
})
export class AnalyticsService implements AnalyticsServiceI {
    private likedCount = 0;
    private dislikedCount = 0;
    private passedCount = 0;

    constructor(private device: Device, private firebaseAnalytics: FirebaseAnalytics) {
        this.logEvent('appOpened');
    }


    disliked() {
        this.dislikedCount++;
        this.logEvent('disliked');
    }

    liked() {
        this.likedCount++;
        this.logEvent('liked');
    }

    passed() {
        this.passedCount++;
        this.logEvent('passed');
    }

    private logEvent(event: string) {
        const obj = {
            uuid: this.device.uuid,
            timestamp: new Date().getTime()
        };
        this.firebaseAnalytics.logEvent(event, obj)
            .then((res: any) => console.log(res))
            .catch((error: any) => console.error(error));
    }
}
