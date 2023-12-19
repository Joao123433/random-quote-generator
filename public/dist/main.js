let h1 = document.querySelector("#author");
let p = document.querySelector("#phrase");
async function fetchPhrases() {
    const data = await fetch("https://quote-garden.onrender.com/api/v3/quotes/random");
    if (data.ok) {
        return data.json();
    }
    return Promise.reject("Erro insperado");
}
async function getInformation() {
    try {
        const info = await fetchPhrases();
        changeTexContent(h1, info.data[0].quoteAuthor);
        changeTexContent(p, info.data[0].quoteText);
    }
    catch (erro) {
        h1.textContent = erro;
    }
}
function changeTexContent(element, info) {
    element.textContent = info;
}
function changeTheme() {
    const html = document.documentElement;
    html.classList.toggle("white");
    const btnSwitch = document.querySelector("#btnSwitch");
    if (html.classList.contains("white")) {
        btnSwitch.setAttribute("src", "./public/assets/sun.svg");
    }
    else {
        btnSwitch.setAttribute("src", "./public/assets/moon-stars.svg");
    }
}
getInformation();
document.querySelector("#btnSwitch").addEventListener("click", changeTheme);
