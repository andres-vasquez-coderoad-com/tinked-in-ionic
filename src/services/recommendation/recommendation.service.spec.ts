import {TestBed} from '@angular/core/testing';

import {RecommendationService} from './recommendation.service';
import {RecommendationModel} from '../../model/recommendation.model';
import {CandidateUserModel, UserModel} from '../../model/user.model';

describe('RecommendationService', () => {
    let service: RecommendationService;
    let recommentation: RecommendationModel;
    const defaultUser: UserModel = new CandidateUserModel(
        '123',
        'Juan Perez',
        'test@upb.edu',
        'Bolivia',
        'La Paz',
        [],
        true
    );

    beforeEach(done => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(RecommendationService);
        service.getRecommendations(defaultUser).subscribe(
            data => {
                recommentation = data;
                done();
            },
            error => {
                console.log('Error loading the Data');
                done();
            });
    });

    it('1. First step', () => {
        expect(recommentation).not.toBeNull();
        expect(2 + 2).toBe(4);
        expect(service).toBeTruthy();
    });

    it('2. Second step', () => {
        expect(2 + 3).toBe(5);
        expect(service).toBeTruthy();
    });
});
