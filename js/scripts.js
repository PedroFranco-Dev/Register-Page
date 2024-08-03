// Elements
const generatePasswordButton = document.querySelector("#generate-password")
const generatePasswordElement = document.querySelector("#generated-password")


// New Functions
const openCloseGeneratorBtn = document.querySelector("#open-generate-password")
const generatePasswordContainer = document.querySelector("#generate-options")
const lenghtInput = document.querySelector("#length")
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

const generatedPassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {
    let password = ""
    
    
    const passwordLenght = 8

    const generators = [
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol,
    ];

    for (i = 0; i < passwordLenght; i = i + 4) {
        generators.forEach(() => {
            const randomValue = generators [Math.floor( Math.random() * generators.length)]();

            password += randomValue;
        });
    };
    generatePasswordElement.style.display = "block";
    generatePasswordElement.querySelector("h4").innerText = password;
};

// password = password.slice(0, passwordLenght)

// console.log(password)

// Events

generatePasswordButton.addEventListener("click", (e) => {
    e.preventDefault()
generatedPassword(
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol
    );
});

openCloseGeneratorBtn.addEventListener("click", () => {
    generatePasswordContainer.classList.toggle("hide")
})








