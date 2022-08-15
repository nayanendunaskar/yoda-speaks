const inputText = document.querySelector("#input");
const btn = document.querySelector("#btn-translate");
const outputText = document.querySelector("#output");
const apiUrl = "https://api.funtranslations.com/translate/yoda.json";

function getTranslationURL(input) {
    return apiUrl + "?" + "text=" + input;
}

function clickHandler() {
    let inputValue = inputText.value;

    fetch(getTranslationURL(inputValue))
        .then((response) => response.json())
        .then((json) => {
            let translatedText = json.contents.translated;
            outputText.innerHTML = translatedText;
        })
        .catch(() => alert("ERROR!!! Please try after some time."));
}

btn.addEventListener("click", clickHandler);