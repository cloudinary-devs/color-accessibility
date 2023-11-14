import './style.css';
import getSimulateColorBlindImage from './simulateColorBlind';


function updateImage()
{
    let colorType = document.getElementById('colortype').value;
    document.getElementById('displayedImage').src = getSimulateColorBlindImage(colorType).toURL();
}

let colorType = 'deuteranopia';

let description = "Simulate Color Blind";
let myImageUrl = getSimulateColorBlindImage(colorType).toURL();


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
dropdown.setAttribute('onchange', 'updateImage()');

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
option3.setAttribute('selected', 'true');
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

surround.append(dropdown);

document.body.appendChild(surround);

// Create the elements
const element = document.createElement('div');
const spacing = document.createElement('div');
const spacing2 = document.createElement('div');
const spacing3 = document.createElement('div');
const imgElement = document.createElement('img');

// Set the styles
element.classList.add('text','App');
spacing.classList.add('space');
spacing2.classList.add('space');
spacing3.classList.add('space');

// Add the description
element.innerHTML = description;

element.appendChild(spacing);

// Set the src attribute of the img element
imgElement.src = myImageUrl;
imgElement.setAttribute('id', 'displayedImage');

// Add the image and some space to the div
element.appendChild(imgElement);
element.appendChild(spacing2);

document.body.appendChild(element);

updateImage();