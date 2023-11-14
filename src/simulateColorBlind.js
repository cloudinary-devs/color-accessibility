import {Cloudinary} from "@cloudinary/url-gen";
import {fill} from "@cloudinary/url-gen/actions/resize";
import { simulateColorBlind } from "@cloudinary/url-gen/actions/effect";
import { SimulateColorBlindType } from "@cloudinary/url-gen/types/types";
import { SimulateColorBlind } from "@cloudinary/url-gen/qualifiers";

export default function getSimulateColorBlindImage(colorType) {

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  });

  // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
  const myImage = cld.image('docs/redflower'); 

  // Resize to 250 x 250 pixels using the 'fill' crop mode.
  myImage.resize(fill().width(250).height(250))
  .effect(simulateColorBlind().condition(colorType));

  return myImage;
}