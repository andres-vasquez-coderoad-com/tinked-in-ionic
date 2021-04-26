import {AfterViewInit, Component, Inject} from '@angular/core';
import {JobPostCard, JobPostModel} from '../../../model/job-post.card';
import {HomeNavigationI} from '../../../model/interfaces/home-navigation-i.model';
import {NavController} from '@ionic/angular';
import {ClientService} from '../../../services/client/client.service';
import {RecommendationModel} from '../../../model/recommendation.model';
import {LinkedInService} from '../../../services/linked-in/linked-in.service';
import {CandidateUserModel, UserModel} from '../../../model/user.model';
import {JobUtils} from '../../../utils/job.utils';
import {LinkedInI} from '../../../model/interfaces/linked-in-i.model';
import {ClientI} from '../../../model/interfaces/client-i.model';
import {MockClientService} from '../../../services/client/mock-client.service';
import {HomePresenterI} from '../use-cases/home.presenter';
import {HomeUseCases} from '../use-cases/home.use-cases';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage implements AfterViewInit, HomeNavigationI {
    cards: Array<JobPostCard> = [];

    constructor(private navCtrl: NavController, @Inject(HomeUseCases) private presenter: HomePresenterI) {
        this.cards = [];
    }

    ngAfterViewInit(): void {
        this.getCards();
    }

    getCards() {
        this.presenter.getCards().subscribe(data => {
            this.cards = data;
        }, error => {

        });
    }

    like(card: JobPostCard) {
        this.presenter.like(card);
    }

    dislike(card: JobPostCard) {
        this.presenter.dislike(card);
    }

    passed(card: JobPostCard) {
        this.presenter.passed(card);
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
