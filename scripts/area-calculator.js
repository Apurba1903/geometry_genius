function calculateTriangleArea() {
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);

    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    // Validation Input
    if (isNaN(base) || isNaN(height)) {
        alert('Please insert a number');
        return;
    }
    const area = 0.5 * base * height;

    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
    // Add to Calculation Entry
    addToCalculutionEntry('Triangle', area);
}


function calculateRectangleArea() {
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);

    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    // Validation Input
    if (isNaN(width) || isNaN(length)) {
        alert('Please insert a number');
        return;
    }
    const area = width * length;

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
    // Add to Calculation Entry
    addToCalculutionEntry('Rectangle', area);
}


function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    // Validation Input
    if (isNaN(base) || isNaN(height)) {
        alert('Please insert a number');
        return;
    }
    const area = base * height;
    setElementInnerText('parallelogram-area', area);
    // Add to Calculation Entry
    addToCalculutionEntry('Parallelogram', area);
}

function calculateEllipseArea() {
    const major = getInputValue('ellipse-major-radius');
    const minor = getInputValue('ellipse-minor-radius');
    // Validation Input
    if (isNaN(major) || isNaN(minor)) {
        alert('Please insert a number');
        return;
    }
    const area = 3.14 * major * minor;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area', areaTwoDecimal);
    // Add to Calculation Entry
    addToCalculutionEntry('Ellipse', areaTwoDecimal);
}



// Reuseable get input value field in number
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
// Reuseable set text field
function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}


// Add to Calculation Entry
function addToCalculutionEntry(areaType, area) {
    console.log(areaType + ' ' + area);
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;

    calculationEntry.appendChild(p);
}