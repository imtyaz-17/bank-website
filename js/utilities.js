function getInputFieldById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputtFieldValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputtFieldValue;
}

function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValue = parseFloat(textElement.innerText);
    return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}