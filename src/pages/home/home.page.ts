import {AfterViewInit, Component} from '@angular/core';
import {JobPostCard} from '../../model/job-post.card';
import {NavigationI} from '../../model/interfaces/navigation-i.model';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage implements AfterViewInit, NavigationI {

    cards: Array<JobPostCard> = [];

    constructor(private navCtrl: NavController) {
        this.cards = [];
    }

    ngAfterViewInit(): void {
        this.loadTinderCards();
    }

    loadTinderCards() {
        this.cards = this.cards.concat(this.getCards());
        this.cards = this.cards.concat(this.getCards());
        this.cards = this.cards.concat(this.getCards());
    }

    getCards(): Array<JobPostCard> {
        return [
            {
                image: 'https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost1.jpg?alt=media',
                title: 'Demo card 1',
                shortDescription: 'This is a demo for Tinder like swipe cards'
            },
            {
                image: 'https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost2.jpg?alt=media',
                title: 'Demo card 2',
                shortDescription: 'This is a demo for Tinder like swipe cards'
            },
            {
                image: 'https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost3.jpg?alt=media',
                title: 'Demo card 3',
                shortDescription: 'This is a demo for Tinder like swipe cards'
            },
            {
                image: 'https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost9.jpg?alt=media',
                title: 'Demo card 4',
                shortDescription: 'This is a demo for Tinder like swipe cards'
            },
            {
                image: 'https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost19.jpg?alt=media',
                title: 'Demo card 5',
                shortDescription: 'This is a demo for Tinder like swipe cards'
            }
        ];
    }

    back() {
    }

    goToChat() {
        this.navCtrl.navigateForward('chat').then();
    }

    goToHome() {
        this.navCtrl.navigateForward('guide').then();
    }

    goToProfile() {
        this.navCtrl.navigateForward('profile').then();
    }
}
