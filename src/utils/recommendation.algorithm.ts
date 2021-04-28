import {CandidateUserModel, UserModel} from '../model/user.model';
import {JobPostModel} from '../model/job-post.model';
import {RecommendationHistory} from '../model/recommendation.model';

export class RecommendationAlgorithm {
    user: CandidateUserModel;
    jobs: Array<JobPostModel>;
    history: RecommendationHistory;

    constructor(user: CandidateUserModel, jobs: Array<JobPostModel>, history: RecommendationHistory) {
        this.user = user;
        this.jobs = jobs;
        this.history = history;
    }

    execute() {
        // Likes
        this.jobs = this.jobs.filter(job => !this.history.likes.has(job.uuid.toString()));

        // Dislikes
        this.jobs = this.jobs.filter(job => !this.history.disLikes.has(job.uuid.toString()));

        // Calculate common tags
        this.jobs.map(job => {
            const commonSkills: Array<string> = job.tags.filter(tag => this.user.skills.includes(tag));
            job.commonWithUser = commonSkills.length;
        });

        let recommendationArray: Array<JobPostModel> = [];
        let firstPosition: JobPostModel = null;
        let secondPosition: JobPostModel = null;
        let thirdPosition: JobPostModel = null;

        for (const jobPost of this.jobs) {
            if (!firstPosition && jobPost.commonWithUser >= 2 && jobPost.country === this.user.country) {
                firstPosition = jobPost;
            } else if (!secondPosition && jobPost.commonWithUser >= 1 && jobPost.city === this.user.city) {
                secondPosition = jobPost;
            } else if (!thirdPosition && jobPost.commonWithUser === 0) {
                thirdPosition = jobPost;
            }
        }
        recommendationArray.push(firstPosition, secondPosition, thirdPosition);
        recommendationArray = recommendationArray.concat(
            this.shuffle(
                this.jobs.filter(job =>
                    firstPosition && job.uuid !== firstPosition.uuid &&
                    secondPosition && job.uuid !== secondPosition.uuid &&
                    thirdPosition && job.uuid !== thirdPosition.uuid)));
        this.jobs = recommendationArray;
    }

    shuffle(array: Array<JobPostModel>): Array<JobPostModel> {
        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
}
