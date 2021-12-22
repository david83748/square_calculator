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


