function showResultInDomKvadrat() { 
    const text = textResultKvadrat(calculateKvadrat())

    document.getElementById('ploschadKvadrata').innerHTML = text
}

function calculateKvadrat() { 
    const calculateSquareKvadrata = squareKvadrata(amountDlinaStoroniKvadrata(), )

    return calculateSquareKvadrata
}

function amountDlinaStoroniKvadrata() { 
    const elementKvadrata = document.getElementById('dlinaStoroniKvadrata').value 

    return elementKvadrata
}

function textResultKvadrat(ploschadKvadrata) { 
    return `${ploschadKvadrata}`
}






function showResultInDomPriamougolnika() {
    const text = textResultPriamougolnika(calculatePriamougolnika())

    document.getElementById('ploschadPriamougolnika').innerHTML = text
}

function calculatePriamougolnika() {
    const calculateSquarePriamougolnika = squarePriamougolnika(amountPervayaDlinaStoroniPriamougolnika(), amountDrugayaDlinaStoroniPriamougolnika())
    
    return calculateSquarePriamougolnika
}

function amountPervayaDlinaStoroniPriamougolnika() {
    const elementPervayaPriamougolnika = document.getElementById('pervayaStoronaPriamougolnika').value
    return elementPervayaPriamougolnika 
}

function amountDrugayaDlinaStoroniPriamougolnika() {
    const elementDrugayaPriamougolnika = document.getElementById('drugayaStoronaPriamougolnika').value
    return elementDrugayaPriamougolnika 

}

function textResultPriamougolnika(ploschadPriamougolnika) {
    return `${ploschadPriamougolnika}`
}







function showResultInDomParalelograma() {
    const text = textResultParalelogram(calculatorParalelograma())

    document.getElementById('ploschadParalelograma').innerHTML = text
};

function calculatorParalelograma() {
    const calculateParalelogram = squareParalelograma(amountDlinaStoronyParalelograma(), amountDlinaVisotyParalelograma())
    return calculateParalelogram
};

function amountDlinaStoronyParalelograma() {
    const elementDlinaStoronyParalelograma = document.getElementById('dlinaStoronyParalelograma').value
    return elementDlinaStoronyParalelograma
};


function amountDlinaVisotyParalelograma() {
    const elementDlinaVisotyParalelograma = document.getElementById('dlinaVisotyParalelograma').value
    return elementDlinaVisotyParalelograma
};

function textResultParalelogram(ploschadParalelograma) {
    return `${ploschadParalelograma}`
};





function showResultInDomRomba() {
    const text = textResultRomba(calculateRomda())

    document.getElementById('ploschadRomba').innerHTML = text
};


function calculateRomda() {
    const calculateRomba = squareRomba(amountDlinaStoronyRomba(), amountDlinaVisotyRomba())

    return calculateRomba
};

function amountDlinaStoronyRomba() {
    const elementDlinaStoronyRomba = document.getElementById('dlinaStoronyRomba').value

    return elementDlinaStoronyRomba
};

function amountDlinaVisotyRomba() {
    const elementDlinaVisotyRomba = document.getElementById('dlinaVisotyRomba').value
    
    return elementDlinaVisotyRomba
};

function textResultRomba(ploschadRomba) {
    return `${ploschadRomba}`
};