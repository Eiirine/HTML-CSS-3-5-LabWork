const firstImage = document.getElementById('first-image');
const secondImage = document.getElementById('second-image');
let isSecondImageVisible = false;

firstImage.addEventListener('click', toggleImages);
secondImage.addEventListener('click', toggleImages);

function toggleImages() {
    if (isSecondImageVisible) {
        firstImage.style.opacity = 1;
        secondImage.style.opacity = 0;
        refreshDynamicFilter();
        isSecondImageVisible = false;
    } else {
        firstImage.style.opacity = 0;
        secondImage.style.opacity = 1;
        applyDynamicFilter();
        isSecondImageVisible = true;
    }
}

function applyDynamicFilter() {
    secondImage.style.filter = 'brightness(150%)';
}

function refreshDynamicFilter() {
    secondImage.style.filter = 'none';
}

