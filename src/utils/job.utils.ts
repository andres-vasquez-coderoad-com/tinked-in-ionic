import { JobPostCard, JobPostModel } from "../model/job-post.card";
import { RecommendationModel } from "../model/recommendation.model";

export class JobUtils {
  static mapJobPostCardToJobPostModel(
    recommendations: RecommendationModel,
    card: JobPostCard
  ): JobPostModel {
    return recommendations.recommendedPosts.find(rec => rec.uuid === card.uuid);
  }
}
