function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    /** forma de evento nao muito utilizado */
    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     alert(1)
    // };


    /** Metodo mais utilizado */
    // let contador = 1;
    // function recebeEventoForm(evento) {
    //     evento.preventDefault();
    //     console.log(`Form nao foi enviado. ${contador}`);
    //     contador++;
    // }
    // form.addEventListener('submit', recebeEventoForm);


    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;

        console.log(nome, sobrenome, peso, altura);
        resultado.innerHTML += `<p>${nome} ${sobrenome} ${peso} ${altura} </p>`;


        function criaPessoa(nome, sobrenome, peso, altura) {
            return {
                nome,
                sobrenome,
                peso,
                altura,
            }
        }
        pessoas.push(criaPessoa(nome, sobrenome, peso, altura))
        console.log(pessoas);

    };
    form.addEventListener('submit', recebeEventoForm);
};

meuEscopo();