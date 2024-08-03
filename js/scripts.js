// Elements
const generatePasswordButton = document.querySelector("#generate-password")
const generatePasswordElement = document.querySelector("#generated-password")


// New Functions
const openCloseGeneratorBtn = document.querySelector("#open-generate-password")
const generatePasswordContainer = document.querySelector("#generate-options")
const lengthInput = document.querySelector("#length")
const lettersInput = document.querySelector("#letters")
const numbersInput = document.querySelector("#numbers")
const symbolsInput = document.querySelector("#symbols")
const copyPasswordButton = document.querySelector("#copy-password")

// Functions

// Letters, Numbers and Simbols
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
};

const getSymbol = () => {
    const symbols = ".,!@#$&*";
    return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = (length, useLetters, useNumbers, useSymbols) => {
    let password = ""
    const passwordLenght = +lengthInput.value;
    const generators = [];

    if(useLetters) {
        generators.push(getLetterLowerCase, getLetterUpperCase)
    };

    if(useNumbers) {
        generators.push(getNumber)
    };

    if(useSymbols) {
        generators.push(getSymbol)
    };

    if(generators.length === 0) {
        return "";
    }

// Mudei aqui por causa que agora tem opção de colocar quantidade de Caracteres :P
    for (i = 0; i < passwordLenght; i++) {
            const randomGenerator = generators[Math.floor(Math.random() * generators.length)];
            password += randomGenerator();
    };
    return password
};


// Events

// Agora aqui vai receber diretamente os valores das Checkbox 
generatePasswordButton.addEventListener("click", (e) => {
    e.preventDefault()
    const length = +lengthInput.value;
    const useLetters = lettersInput.checked;
    const useNumbers = numbersInput.checked;
    const useSymbols = symbolsInput.checked;
    const password = generatePassword(length, useLetters, useNumbers, useSymbols);

    generatePasswordElement.style.display = "block";
    generatePasswordElement.querySelector("h4").innerText = password;
});

openCloseGeneratorBtn.addEventListener("click", () => {
    generatePasswordContainer.classList.toggle("hide")
})








