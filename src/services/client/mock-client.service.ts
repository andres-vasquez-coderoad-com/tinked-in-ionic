import { Injectable } from "@angular/core";
import { UserModel } from "../../model/user.model";
import { RecommendationModel } from "../../model/recommendation.model";
import { JobPostModel } from "../../model/job-post.card";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { ClientI } from "../../model/interfaces/client-i.model";

@Injectable({
  providedIn: "root"
})
export class MockClientService implements ClientI {
  constructor(private http: HttpClient) {}

  getRecommendations(user: UserModel): Observable<RecommendationModel> {
    console.log("Recommendations 2");
    const json: Array<JobPostModel> = [
      {
        uuid: "1",
        country: "Bolivia",
        city: "La Paz",
        accuracy: 0.8,
        random: false,
        tags: ["Android", "ML", "Ionic"],
        card: {
          image:
            "https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost20.jpg?alt=media",
          title: "Demo card 1",
          shortDescription: "This is a demo for Tinder like swipe cards"
        }
      },
      {
        uuid: "2",
        country: "Bolivia",
        city: "La Paz",
        accuracy: 0.78,
        random: false,
        tags: ["Android", "ML", "Ionic"],
        card: {
          image:
            "https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost19.jpg?alt=media",
          title: "Demo card 2",
          shortDescription: "This is a demo for Tinder like swipe cards"
        }
      },
      {
        uuid: "3",
        country: "Bolivia",
        city: "La Paz",
        accuracy: 0.8,
        random: false,
        tags: ["Android", "ML", "Ionic"],
        card: {
          image:
            "https://firebasestorage.googleapis.com/v0/b/tinked-in.appspot.com/o/jobs%2Fpost18.jpg?alt=media",
          title: "Demo card 3",
          shortDescription: "This is a demo for Tinder like swipe cards"
        }
      }
    ];
    return of(new RecommendationModel(json));

    /*return this.http
      .get<Array<JobPostModel>>("/assets/mocked/")
      .pipe(map(json => new RecommendationModel(json)));*/
  }

  postLike(userModel: UserModel, job: JobPostModel): boolean {
    console.log("Like saved", job);
    return true;
  }

  disLike(userModel: UserModel, job: JobPostModel): boolean {
    console.log("Dislike saved", job);
    return true;
  }

  passed(userModel: UserModel, job: JobPostModel): boolean {
    console.log("Passed saved", job);
    return true;
  }
}
