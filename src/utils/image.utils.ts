export class ImageUtils {
    static getImageFilePath(): string {
        const url = window.location.href;
        let basePath = '/';
        if (!url.indexOf('localhost')) {
            basePath = 'https://github.com/andres-vasquez-coderoad-com/tinked-in-ionic/blob/develop/src';
        }
        return basePath;
    }
}
