function meuEscopo() {
    function getDiaSemanaTexto(diaSemana) {
        // utilizando switch case
        switch (diaSemana) {
            case 0: return 'domingo';
            case 1: return 'segunda-feira';
            case 2: return 'terça-feira';
            case 3: return 'quarta-feira';
            case 4: return 'quinta-feira';
            case 5: return 'sexta-feira';
            case 6: return 'sabado';
            default: return '';
        }
    }

    function getMesTexto(mes) {
        // utilizando switch case
        switch (mes) {
            case 0: return 'janeiro';
            case 1: return 'feveiro';
            case 2: return 'março';
            case 3: return 'abril';
            case 4: return 'maio';
            case 5: return 'junho';
            case 6: return 'julho';
            case 7: return 'agosto';
            case 8: return 'setembro';
            case 9: return 'outubro';
            case 10: return 'novembro';
            case 11: return 'dezembro';
            default: return '';
        }
    }

    function criaH1() {
        return h1 = document.createElement('h1');
    }

    const data = new Date();

    const diaSemana = getDiaSemanaTexto(data.getDay());
    const dia = data.getDate();
    const mes = getMesTexto(data.getMonth());
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();

    const div_texto = document.querySelector('.date');
    data_texto = criaH1();
    hora_texto = criaH1();

    data_texto.innerHTML = `${diaSemana}, ${dia} de ${mes} de ${ano}`;
    hora_texto.innerHTML = `${hora}:${min}`;
    div_texto.appendChild(data_texto);
    div_texto.appendChild(hora_texto);
}


meuEscopo();