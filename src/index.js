import './style.css';
import getSimulateColorBlindImage from './simulateColorBlind';


function updateImage()
{
    let colorType = document.getElementById('colortype').value;
    document.getElementById('displayedImage1').src = getSimulateColorBlindImage(publicId1, colorType).toURL();
    document.getElementById('displayedImage2').src = getSimulateColorBlindImage(publicId2, colorType).toURL();
    document.getElementById('displayedImage3').src = getSimulateColorBlindImage(publicId3, colorType).toURL();
}

let publicId1 = 'docs/redflower';
let publicId2 = 'docs/palette.png';
let publicId3 = 'docs/piechart.png';
let colorType = 'none';

//let description = "Simulate Color Blind";
let myImageUrl1 = getSimulateColorBlindImage(publicId1, colorType).toURL();
let myImageUrl2 = getSimulateColorBlindImage(publicId2, colorType).toURL();
let myImageUrl3 = getSimulateColorBlindImage(publicId3, colorType).toURL();


const surround = document.createElement('div');

const label = document.createElement('label');
label.innerHTML='Select a type of color blindness:'
label.setAttribute('for', 'colortype');
label.classList.add('select_label2');
surround.appendChild(label);

const spacing4 = document.createElement('div');
spacing4.classList.add('newline');
surround.appendChild(spacing4);

const selectionArea = document.createElement('div');
selectionArea.classList.add('selection');
surround.appendChild(selectionArea);

const dropdown = document.createElement('select');
dropdown.classList.add('select-css');
dropdown.setAttribute('id','colortype');
dropdown.setAttribute('name','colortype');

const option = document.createElement('option');
option.setAttribute('value', 'none');
option.setAttribute('id', 'none');
option.setAttribute('selected', 'true');
option.innerHTML = 'None';
dropdown.appendChild(option);

const option1 = document.createElement('option');
option1.setAttribute('value', 'deuteranopia');
option1.setAttribute('id', 'deuteranopia');
option1.innerHTML = 'deuteranopia';
dropdown.appendChild(option1);

const option2 = document.createElement('option');
option2.setAttribute('value', 'protanopia');
option2.setAttribute('id', 'protanopia');
option2.innerHTML = 'protanopia';
dropdown.appendChild(option2);

const option3 = document.createElement('option');
option3.setAttribute('value', 'tritanopia');
option3.setAttribute('id', 'tritanopia');
option3.innerHTML = 'tritanopia';
dropdown.appendChild(option3);

const option4 = document.createElement('option');
option4.setAttribute('value', 'tritanomaly');
option4.setAttribute('id', 'tritanomaly');
option4.innerHTML = 'tritanomaly';
dropdown.appendChild(option4);

const option5 = document.createElement('option');
option5.setAttribute('value', 'deuteranomaly');
option5.setAttribute('id', 'deuteranomaly');
option5.innerHTML = 'deuteranomaly';
dropdown.appendChild(option5);

const option6 = document.createElement('option');
option6.setAttribute('value', 'cone_monochromacy');
option6.setAttribute('id', 'cone_monochromacy');
option6.innerHTML = 'cone_monochromacy';
dropdown.appendChild(option6);

const option7 = document.createElement('option');
option7.setAttribute('value', 'rod_monochromacy');
option7.setAttribute('id', 'rod_monochromacy');
option7.innerHTML = 'rod_monochromacy';
dropdown.appendChild(option7);

selectionArea.append(dropdown);

document.body.appendChild(surround);

// Create the elements
const element = document.createElement('div');
const spacing = document.createElement('div');
const spacing2 = document.createElement('div');
const spacing3 = document.createElement('div');
const imgElement1 = document.createElement('img');
const imgElement2 = document.createElement('img');
const imgElement3 = document.createElement('img');

// Set the styles
element.classList.add('text','App');
spacing.classList.add('space');
spacing2.classList.add('space');
spacing3.classList.add('space');

// Add the description
//element.innerHTML = description;

element.appendChild(spacing);

const divCenter = document.createElement('div');
divCenter.classList.add('alignCenter');
element.appendChild(divCenter);

const span1 = document.createElement('span');
span1.classList.add('spanInline');
divCenter.appendChild(span1);

const span2 = document.createElement('span');
span2.classList.add('spanInline');
divCenter.appendChild(span2);

const span3 = document.createElement('span');
span3.classList.add('spanInline');
divCenter.appendChild(span3);


// Set the src attribute of the img element
imgElement1.src = myImageUrl1;
imgElement1.setAttribute('id', 'displayedImage1');
imgElement1.classList.add('imageInline');

imgElement2.src = myImageUrl2;
imgElement2.setAttribute('id', 'displayedImage2');
imgElement2.classList.add('imageInline');

imgElement3.src = myImageUrl3;
imgElement3.setAttribute('id', 'displayedImage3');
imgElement3.classList.add('imageInline');

// Add the images and some space to the div
span1.appendChild(imgElement1);
span2.appendChild(imgElement2);
span3.appendChild(imgElement3);
element.appendChild(spacing2);

document.body.appendChild(element);

dropdown.addEventListener('change', updateImage);
