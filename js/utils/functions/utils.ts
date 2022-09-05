import { PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE_ALT } from "../constants/generalConstants";
import { ImageData } from "../types/DynamicData";

const getImageProperties = (imageData: ImageData | null, format='default') =>{
	let imageUrl, imageAlt;

	if (imageData?.data) {
        const image = imageData.data.attributes;
		switch(format) {
			case 'default':
				imageUrl = image.url;
				break;
			case 'small':
				imageUrl = (image.formats?.small && image.formats?.small.size < image.size) ? image.formats.small.url : image.url;
				break;
			case 'medium':
				imageUrl = (image.formats?.medium && image.formats?.medium.size < image.size) ? image.formats.medium.url : image.url;
				break;
			case 'large':
				imageUrl = (image.formats?.large && image.formats?.large.size < image.size) ? image.formats.large.url : image.url;
				break;
			default:
				imageUrl = image.url;
				break;
		}
		imageAlt = image.alternativeText.length ? image.alternativeText : image.name;
	} else {
		imageUrl = PLACEHOLDER_IMAGE;
		imageAlt = PLACEHOLDER_IMAGE_ALT;
	}
	return { imageUrl, imageAlt, };
};

export {getImageProperties};