import {AfterViewInit, Component} from '@angular/core';
import {JobPostModel} from '../../model/job-post.model';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage implements AfterViewInit {

    cards: Array<JobPostModel> = [];

    constructor() {
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

    getCards(): Array<JobPostModel> {
        return [
            {
                image: 'https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost9.png?alt=media',
                title: 'Demo card 1',
                shortDescription: 'This is a demo for Tinder like swipe cards'
            },
            {
                image: 'https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost9.png?alt=media',
                title: 'Demo card 2',
                shortDescription: 'This is a demo for Tinder like swipe cards'
            },
            {
                image: 'https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost9.png?alt=media',
                title: 'Demo card 3',
                shortDescription: 'This is a demo for Tinder like swipe cards'
            },
            {
                image: 'https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost9.png?alt=media',
                title: 'Demo card 4',
                shortDescription: 'This is a demo for Tinder like swipe cards'
            },
            {
                image: 'https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost9.png?alt=media',
                title: 'Demo card 5',
                shortDescription: 'This is a demo for Tinder like swipe cards'
            }
        ];
    }
}
