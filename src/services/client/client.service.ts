import { Inject, Injectable } from "@angular/core";
import { UserModel } from "../../model/user.model";
import { RecommendationModel } from "../../model/recommendation.model";
import { JobPostModel } from "../../model/job-post.card";
import { Observable, of } from "rxjs";
import { RecommendationService } from "../recommendation/recommendation.service";

@Injectable({
  providedIn: "root"
})
export class ClientService {
  constructor(@Inject(RecommendationService) private recommendationService: RecommendationService) {}

  getRecommendations(user: UserModel): Observable<RecommendationModel> {
    return this.recommendationService.getRecommendations(user);
  }

  postLike(user: UserModel, job: JobPostModel): boolean {
    console.log("Like saved", job);
    this.updateRecommendationHistory(
      user,
      new Date().getTime(),
      job.uuid,
      null,
      null
    );
    return true;
  }

  disLike(user: UserModel, job: JobPostModel): boolean {
    console.log("Dislike saved", job);
    this.updateRecommendationHistory(
      user,
      new Date().getTime(),
      null,
      job.uuid,
      null
    );
    return true;
  }

  passed(user: UserModel, job: JobPostModel): boolean {
    console.log("Passed saved", job);
    this.updateRecommendationHistory(
      user,
      new Date().getTime(),
      null,
      null,
      job.uuid
    );
    return true;
  }

  updateRecommendationHistory(
    user: UserModel,
    timestamp: number,
    likeUuid: string,
    disLikeUuid: string,
    passedUuid: string
  ) {
    const history = this.recommendationService.getHistory(user.uuid);
    if (likeUuid) {
      history.likes.add(likeUuid);
    }

    if (disLikeUuid) {
      history.disLikes.add(disLikeUuid);
      this.sendNotification();
    }

    if (passedUuid) {
      if (!history.passed.has(passedUuid)) {
        history.passed.set(passedUuid, 0);
      }
      history.passed.set(passedUuid, history.passed.get(passedUuid) + 1);
    }
    history.lastActionTimestamp = timestamp;
  }

  sendNotification() {
    //TODO send notification
  }
}
