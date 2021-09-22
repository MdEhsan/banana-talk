const textInput = document.querySelector("#text-input")
const outPut = document.querySelector("#text-output")
const btnTranslate = document.querySelector(".translate-btn")


var serverURL = "https://api.funtranslations.com/translate/minion.json";


function getTranslateURL(input){
    return serverURL + "?" + "text=" + input;
}


function errorHandler(error){
    console.log("error occoured" , error);
    alert("Oops! Something went wrong. Try again later.")
}


function clickHandler(){

    var inputText = textInput.value;

    fetch(getTranslateURL(inputText))
        .then(response => response.json())
        .then(json => {

            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;

        }).catch(errorHandler)

}

btnTranslate.addEventListener("click", clickHandler)