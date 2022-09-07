import placeholderImage from '../../../public/PlaceholderImage.png';

const PLACEHOLDER_IMAGE =  placeholderImage;
const PLACEHOLDER_IMAGE_ALT = 'Placeholder image';

const WEB_URL = process.env.ENVIRONMENT === 'development' ? 'http://localhost:3000' : 'https://glimpseofromania.com';
const API_URL = process.env.ENVIRONMENT === 'development' ? 'http://localhost:1337' : 'https://cms-glimpseofromania.com';

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
    MAPS_REFERENCE_TILE
}