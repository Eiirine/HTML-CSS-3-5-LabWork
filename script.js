let clickOrder = [];
const secretOrder = ["object1", "object2", "object3"];
const clickableElements = document.querySelectorAll('.clickable');

clickableElements.forEach(element => {
    element.addEventListener('click', (e) => {
        clickOrder.push(e.target.id);
        if (clickOrder.length === 3) {
            if (JSON.stringify(clickOrder) === JSON.stringify(secretOrder)) {
                window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=0s&ab_channel=RickAstley";
            } else {
                clickOrder = [];
            }
        }
    });
});

let typedPhrase = "";
const secretPhrase = "дора";

document.addEventListener('keydown', (e) => {
    typedPhrase += e.key;
    if (typedPhrase.length > secretPhrase.length) {
        typedPhrase = typedPhrase.slice(1);
    }
    if (typedPhrase === secretPhrase) {
        window.location.href = "https://www.youtube.com/watch?v=WNadEfGnV04&ab_channel=дора";
    }
});