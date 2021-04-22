import { AfterViewInit, Component, Inject } from "@angular/core";
import { JobPostCard, JobPostModel } from "../../model/job-post.card";
import { NavigationI } from "../../model/interfaces/navigation-i.model";
import { NavController } from "@ionic/angular";
import { ClientService } from "../../services/client/client.service";
import { RecommendationModel } from "../../model/recommendation.model";
import { LinkedInService } from "../../services/linked-in/linked-in.service";
import { CandidateUserModel, UserModel } from "../../model/user.model";
import { JobUtils } from "../../utils/job.utils";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements AfterViewInit, NavigationI {
  currentUser: UserModel;
  recommendations: RecommendationModel;
  cards: Array<JobPostCard> = [];

  constructor(
    private navCtrl: NavController,
    @Inject(LinkedInService) private linkedInService: LinkedInService,
    @Inject(ClientService) private clientService: ClientService
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

  back() {}

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
