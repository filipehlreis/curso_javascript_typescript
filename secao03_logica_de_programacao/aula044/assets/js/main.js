function meuEscopo() {
    const resultado = document.querySelector('.resultado');
    const form = document.querySelector('.form');


    function calcular(evento) {
        evento.preventDefault();
        const peso = Number(form.querySelector('#input-peso').value);
        const altura = Number(form.querySelector('#input-altura').value);
        let mensagem = '';
        let categoria = '';

        if (!peso) {
            mensagem += 'Peso inválido.';
        } else if (!altura) {
            mensagem += 'Altura inválida.';
        } else {
            const imc = peso / (altura ** 2);

            if (imc >= 40) {
                categoria = 'Obesidade grau 3';
            } else if (imc >= 35) {
                categoria = 'Obesidade grau 2';
            } else if (imc >= 30) {
                categoria = 'Obesidade grau 1';
            } else if (imc >= 25) {
                categoria = 'Sobrepeso';
            } else if (imc >= 18.5) {
                categoria = 'Peso normal';
            } else {
                categoria = 'Abaixo do peso';
            }

            mensagem = `<p>O seu IMC atual é: ${imc.toFixed(2)} (${categoria})</p>`;
        }
        resultado.innerHTML = mensagem;
        console.log(Number(peso), altura);

    }

    form.addEventListener('submit', calcular);
}



meuEscopo()