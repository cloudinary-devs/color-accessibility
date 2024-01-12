import {Cloudinary} from "@cloudinary/url-gen";
import {scale} from "@cloudinary/url-gen/actions/resize";
import { simulateColorBlind } from "@cloudinary/url-gen/actions/effect";
import { assistColorBlind } from "@cloudinary/url-gen/actions/effect";

export default function getSimulateColorBlindImage(publicId, colorType, assistType) {

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  });

  // Instantiate a CloudinaryImage object for the image.
  const myImage = cld.image(publicId); 

  // Resize to a height of 250 pixels using the 'scale' crop mode.
  myImage.resize(scale().height(250));

  if (assistType !== "none") {
    if (assistType === "xray"){
      myImage.effect(assistColorBlind().xray());
    }
    else {
      myImage.effect(assistColorBlind().stripesStrength(20));
    }

  }

  if (colorType !== "none") {
    myImage.effect(simulateColorBlind().condition(colorType));
  }

  return myImage;
}