export class JobPostCard {
    image: string;
    title: string;
    shortDescription: string;
}

export class JobPostModel {
    uuid?: string;
    card: JobPostCard;
    country: string;
    city: string;
    accuracy: number;
    random: boolean;
    tags: Set<string>;
}
