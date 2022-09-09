import placeholderImage from '../../../public/PlaceholderImage.png';

const PLACEHOLDER_IMAGE =  placeholderImage;
const PLACEHOLDER_IMAGE_ALT = 'Placeholder image';

const getEnvWebUrl = (envEnvironment : string | undefined) => {
    switch (envEnvironment) {
        case 'development':
            return 'http://localhost:3000';
        case 'staging':
            return 'https://glimpseofromania.com';
        case 'production':
            return 'https://glimpseofromania.com';
        default:
            return '';
    }
}

const getEnvApiUrl = (envEnvironment : string | undefined) => {
    switch (envEnvironment) {
        case 'development':
            return 'http://localhost:1337';
        case 'staging':
            return 'https://cms-glimpseofromania.com';
        case 'production':
            return 'https://cms-glimpseofromania.com';
        default:
            return '';
    }
}

const WEB_URL = getEnvWebUrl(process.env.ENVIRONMENT);
const API_URL = getEnvApiUrl(process.env.ENVIRONMENT);

const MAILCHIMP_U = '2e73020f34faad78ecffe79d4';
const MAILCHIMP_ID = 'ea76d9b8f1'

const INSTAGRAM_LINK = 'https://www.instagram.com/';
const FACEBOOK_LINK = 'https://www.facebook.com/';
const MAPS_REFERENCE_TILE = 'Find it on your map!';

export {
    PLACEHOLDER_IMAGE,
    PLACEHOLDER_IMAGE_ALT,
    WEB_URL,
    API_URL,
    INSTAGRAM_LINK,
    FACEBOOK_LINK,
    MAPS_REFERENCE_TILE,
    MAILCHIMP_U,
    MAILCHIMP_ID
}