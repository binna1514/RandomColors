const button = document.querySelector("button");
const h1 = document.querySelector("h1");
let r = 0;
let g = 0;
let b = 0;

button.addEventListener("click", () => {
    h1.style.color = 'rgb(255, 255, 255)';
    const newColor = makeRandColor();
    const isDark = r + g + b;
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
    if (isDark > 550) {
        h1.style.color = 'rgb(0,0,0)';
    }
});

const makeRandColor = () => {
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

