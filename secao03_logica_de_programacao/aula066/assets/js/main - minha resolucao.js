const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');


const zeroAEsquerda = (numero) => (numero < 10) ? `0${numero}` : `${numero}`;

let hora = 0;
let minutos = 0;
let segundos = 0;
let timer='';


function atualizaHora() {
    relogio.innerHTML = `${zeroAEsquerda(hora)}:${zeroAEsquerda(minutos)}:${zeroAEsquerda(segundos)}`
    relogio.classList.add('black');
    relogio.classList.remove('red');
    incrementaHora();
}

function incrementaHora() {
    segundos += 1;
    if (segundos >= 60) {
        segundos = 0;
        minutos += 1;
    }
    if (minutos >= 60) {
        minutos = 0;
        hora += 1;
    }
    if (hora >= 24) {
        hora = 0;
    }
}



function iniciaHora() {
    relogio.classList.add('black');
    if (!timer) {
        timer = setInterval(function () {
            atualizaHora();
        }, 500);
    }
}


function pausaHora() {
    relogio.classList.add('red');
    clearInterval(timer)
    timer = '';
}


function zeraHora() {
    relogio.classList.add('black');
    [hora, minutos, segundos] = [0, 0, 0];
    atualizaHora();
    clearInterval(timer)
    timer = '';
}

iniciar.addEventListener('click', function (event) {
    iniciaHora();
});

pausar.addEventListener('click', function (event) {
    pausaHora();
});

zerar.addEventListener('click', function (event) {
    zeraHora();
});