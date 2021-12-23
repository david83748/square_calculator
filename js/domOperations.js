function showResultInDomKvadrat() {   

    document.getElementById('ploschadKvadrata').innerHTML = squareKvadrata(document.getElementById('dlinaStoroniKvadrata').value)
};
function showResultInDomPriamougolnika() {  
    const pervayaStoronaPriamougolnika = document.getElementById('pervayaStoronaPriamougolnika').value
    const rugayaStoronaPriamougolnika = document.getElementById('drugayaStoronaPriamougolnika').value

    document.getElementById('ploschadPriamougolnika').innerHTML = squarePriamougolnika(pervayaStoronaPriamougolnika, rugayaStoronaPriamougolnika)
};
function showResultInDomParalelograma() {
    const dlinaStoronyParalelograma = document.getElementById('dlinaStoronyParalelograma').value
    const dlinaVisotyParalelograma = document.getElementById('dlinaVisotyParalelograma').value

    document.getElementById('ploschadParalelograma').innerHTML = squareParalelograma(dlinaStoronyParalelograma, dlinaVisotyParalelograma)
};
function showResultInDomRomba() {
    const dlinaStoronyRomba = document.getElementById('dlinaStoronyRomba').value
    const dlinaVisotyRomba = document.getElementById('dlinaVisotyRomba').value

    document.getElementById('ploschadRomba').innerHTML = squareParalelograma(dlinaStoronyRomba, dlinaVisotyRomba)
};

