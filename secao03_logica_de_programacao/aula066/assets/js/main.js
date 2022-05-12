function relogio() {




    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }

    console.log(criaHoraDosSegundos(10))



    const relogio = document.querySelector('.relogio');
    // const iniciar = document.querySelector('.iniciar');
    // const pausar = document.querySelector('.pausar');
    // const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 500);
    }



    // iniciar.addEventListener('click', function (event) {
    //     relogio.classList.remove('red');
    //     clearInterval(timer);
    //     iniciaRelogio();
    // });

    // pausar.addEventListener('click', function (event) {
    //     relogio.classList.add('red');
    //     clearInterval(timer);
    // });

    // zerar.addEventListener('click', function (event) {
    //     relogio.classList.remove('red');
    //     clearInterval(timer);
    //     segundos = 0;
    //     relogio.innerHTML = '00:00:00';
    // });


    document.addEventListener('click', function (e) {
        const el = e.target;

        if (el.classList.contains('zerar')) {
            relogio.classList.remove('red');
            clearInterval(timer);
            segundos = 0;
            relogio.innerHTML = '00:00:00';
        }

        if (el.classList.contains('pausar')) {
            relogio.classList.add('red');
            clearInterval(timer);
        }

        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('red');
            clearInterval(timer);
            iniciaRelogio();
        }
    });

}

relogio();