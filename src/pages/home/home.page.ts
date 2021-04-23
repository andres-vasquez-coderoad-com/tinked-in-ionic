import { AfterViewInit, Component, Inject } from "@angular/core";
import { JobPostCard, JobPostModel } from "../../model/job-post.card";
import { HomeNavigationI } from "../../model/interfaces/home-navigation-i.model";
import { NavController } from "@ionic/angular";
import { ClientService } from "../../services/client/client.service";
import { RecommendationModel } from "../../model/recommendation.model";
import { LinkedInService } from "../../services/linked-in/linked-in.service";
import { CandidateUserModel, UserModel } from "../../model/user.model";
import { JobUtils } from "../../utils/job.utils";
import { LinkedInI } from "../../model/interfaces/linked-in-i.model";
import { ClientI } from "../../model/interfaces/client-i.model";
import { MockClientService } from "../../services/client/mock-client.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements AfterViewInit, HomeNavigationI {
  currentUser: UserModel;
  recommendations: RecommendationModel;
  cards: Array<JobPostCard> = [];

  constructor(
    private navCtrl: NavController,
    @Inject(LinkedInService) private linkedInService: LinkedInI,
    @Inject(ClientService) private clientService: ClientI
  ) {
    this.cards = [];
  }

  ngAfterViewInit(): void {
    this.currentUser = this.linkedInService.login(null);
    if (this.currentUser instanceof CandidateUserModel) {
      this.getCards();
    }
  }

  getCards() {
    this.clientService.getRecommendations(this.currentUser).subscribe(data => {
      this.recommendations = data;
      this.cards = data.getCards();
    });
  }

  goToChat() {
    this.navCtrl.navigateForward("chat").then();
  }

  goToHome() {
    this.navCtrl.navigateForward("guide").then();
  }

  goToProfile() {
    this.navCtrl.navigateForward("profile").then();
  }

  like(card: JobPostCard) {
    console.log("Prueba");
    this.clientService.postLike(
      this.currentUser,
      JobUtils.mapJobPostCardToJobPostModel(this.recommendations, card)
    );
  }

  dislike(card: JobPostCard) {
    this.clientService.disLike(
      this.currentUser,
      JobUtils.mapJobPostCardToJobPostModel(this.recommendations, card)
    );
  }

  passed(card: JobPostCard) {
    this.clientService.passed(
      this.currentUser,
      JobUtils.mapJobPostCardToJobPostModel(this.recommendations, card)
    );
  }
}
