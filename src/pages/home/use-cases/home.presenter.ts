import {JobPostCard} from '../../../model/job-post.card';
import {Observable} from 'rxjs';

export interface HomePresenterI {
    getCards(): Observable<Array<JobPostCard>>;

    like(card: JobPostCard): boolean;

    dislike(card: JobPostCard): boolean;

    passed(card: JobPostCard): boolean;
}
