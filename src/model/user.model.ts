export class UserModel {
    uuid?: string;
    displayName: string;
    email: string;
    country: string;
    city: string;
    relocation: boolean;
    skills: Set<string>;
}
