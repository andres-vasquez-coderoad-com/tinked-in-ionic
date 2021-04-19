import {JobPostCard} from './job-post.card';

export class RecommendationModel {
    uuid?: string;
    timestamp: number;
    fromCache: boolean;
    recommendedPosts: Array<JobPostCard>;
}

export class RecommendationHistory {
    userUuid: string;
    //Uuid of JobPosts
    likes: Set<string>;
    disLikes: Set<string>;

    //Key; Uuid of JobPost, val: Number of occurrences
    passed: Map<string, number>;
}
