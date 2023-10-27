const inputField = document.getElementById('inputField');
const output = document.getElementById('output');
let interval;
let currentIndex = 0;

function startAnimation() {
    if (interval) {
        clearInterval(interval);
        currentIndex = 0;
    }

    interval = setInterval(() => {
        output.innerHTML = convertToHighlightedText(inputField.value, currentIndex);
        currentIndex++;

        if (currentIndex > inputField.value.length) {
            currentIndex = 0;
        }
    }, 100); 
}

function convertToHighlightedText(text, index) {
    let before = text.slice(0, index);
    let highlighted = text.charAt(index).toUpperCase();
    let after = text.slice(index + 1);

    return before + highlighted + after;
}


