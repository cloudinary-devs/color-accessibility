import './style.css';
import getSimulateColorBlindImage from './simulateColorBlind';

const publicIds = ['docs/redflower', 'docs/palette.png', 'docs/piechart.png'];
const imageUrls = ['', '', ''];

function updateImages() {
    const colorType = document.getElementById('colortype').value;
    const assistType = document.getElementById('assisttype').value;

    for (let i = 1; i <= 3; i++) {
        const imgElement = document.getElementById(`displayedImage${i}`);
        imgElement.src = getSimulateColorBlindImage(publicIds[i - 1], colorType, assistType).toURL();
    }
}

function createDropdown(id, values) {
    const dropdown = document.createElement('select');
    dropdown.classList.add('select-css');
    dropdown.setAttribute('id', id);
    dropdown.setAttribute('name', id);

    values.forEach((value) => {
        const option = document.createElement('option');
        option.setAttribute('value', value.toLowerCase().replace(/\s/g, '_'));
        option.setAttribute('id', value.toLowerCase());
        option.setAttribute('selected', value.toLowerCase() === 'none' ? 'true' : 'false');
        option.innerHTML = value;
        dropdown.appendChild(option);
    });

    return dropdown;
}

function createSelectionArea(labelText, id, values) {
    const surround = document.createElement('div');

    const label = document.createElement('label');
    label.innerHTML = `${labelText}:`;
    label.setAttribute('for', id);
    label.classList.add('selectLabel');
    surround.appendChild(label);

    const spacing = document.createElement('div');
    spacing.classList.add('spacing');
    surround.appendChild(spacing);

    const selectionArea = document.createElement('div');
    selectionArea.classList.add('selection');
    surround.appendChild(selectionArea);

    const dropdown = createDropdown(id, values);
    selectionArea.append(dropdown);

    document.body.appendChild(surround);

    return surround; // Return the created div for setting the initial value later
}

// Set the public IDs
const [publicId1, publicId2, publicId3] = publicIds;

// Create color type dropdown
const colorTypeDropdown = createSelectionArea('Select a type of color blindness', 'colortype', [
    'None',
    'Deuteranopia',
    'Protanopia',
    'Tritanopia',
    'Tritanomaly',
    'Deuteranomaly',
    'Cone Monochromacy',
    'Rod Monochromacy',
]);

// Create color blindness assistance dropdown
const assistTypeDropdown = createSelectionArea('Select a way to assist color blindness', 'assisttype', ['None', 'Stripes', 'Xray']);

// Set 'None' as the initial selected option for both select boxes
colorTypeDropdown.querySelector('select').value = 'none';
assistTypeDropdown.querySelector('select').value = 'none';

// Add spacing between the second select box and the images
const spacingBetweenSelectAndImages = document.createElement('div');
spacingBetweenSelectAndImages.classList.add('spacing'); 
document.body.appendChild(spacingBetweenSelectAndImages);

// Create image elements
const element = document.createElement('div');
element.classList.add('text', 'App');

const divCenter = document.createElement('div');
divCenter.classList.add('alignCenter');
element.appendChild(divCenter);

const spanContainer = document.createElement('span');

for (let i = 1; i <= 3; i++) {
    const imgElement = document.createElement('img');
    imgElement.src = imageUrls[i - 1];
    imgElement.setAttribute('id', `displayedImage${i}`);
    imgElement.classList.add('imageInline');
    spanContainer.appendChild(imgElement);
}

divCenter.appendChild(spanContainer);
document.body.appendChild(element);

document.getElementById('colortype').addEventListener('change', updateImages);
document.getElementById('assisttype').addEventListener('change', updateImages);

updateImages();
