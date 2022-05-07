function meuEscopo() {

    /**
     * Primeira Solucao
    //  */
    // function getDiaSemanaTexto(diaSemana) {
    //     // utilizando switch case
    //     switch (diaSemana) {
    //         case 0: return 'domingo';
    //         case 1: return 'segunda-feira';
    //         case 2: return 'terça-feira';
    //         case 3: return 'quarta-feira';
    //         case 4: return 'quinta-feira';
    //         case 5: return 'sexta-feira';
    //         case 6: return 'sabado';
    //         default: return '';
    //     }
    // }

    // function getMesTexto(mes) {
    //     // utilizando switch case
    //     switch (mes) {
    //         case 0: return 'janeiro';
    //         case 1: return 'feveiro';
    //         case 2: return 'março';
    //         case 3: return 'abril';
    //         case 4: return 'maio';
    //         case 5: return 'junho';
    //         case 6: return 'julho';
    //         case 7: return 'agosto';
    //         case 8: return 'setembro';
    //         case 9: return 'outubro';
    //         case 10: return 'novembro';
    //         case 11: return 'dezembro';
    //         default: return '';
    //     }
    // }

    // function criaH1() {
    //     return h1 = document.createElement('h1');
    // }


    // function zeroAEsquerda(num) {
    //     return num >= 10 ? num : `0${num}`;
    // }

    // function criaData(data) {
    //     const diaSemana = getDiaSemanaTexto(data.getDay());
    //     const dia = data.getDate();
    //     const mes = getMesTexto(data.getMonth());
    //     const ano = data.getFullYear();
    //     const hora = zeroAEsquerda(data.getHours());
    //     const min = zeroAEsquerda(data.getMinutes());

    //     return `${diaSemana}, ${dia} de ${mes} de ${ano}<br>${hora}:${min}`;
    // }


    // const div_texto = document.querySelector('.date');
    // const data = new Date();

    // data_texto = criaH1();
    // data_texto.innerHTML = `${criaData(data)}`;
    // div_texto.appendChild(data_texto);


    /**
     * Segunda solucao
     */
    /*
        const div_texto = document.querySelector('.date h1');
        const data = new Date();
    
        // data_texto = criaH1();
        // data_texto.innerHTML = `${criaData(data)}`;
        // div_texto.appendChild(data_texto);
    
        const options = {
            dateStyle: 'full',
            timeStyle: 'short',
        }
    
        console.log(data.toLocaleString('pt-BR', options))
        div_texto.innerHTML = data.toLocaleString('pt-BR', options);
        // div_texto.innerHTML = 'gdf';
    */


    /**
     * Terceira Solucao
     */


    function getDiaSemanaTexto(diaSemana) {
        // utilizando array
        const diaSemanaTexto = ['domingo', 'segunda-feira', 'terça-feira',
            'quarta-feira', 'quinta-feira', 'sexta-feira', 'sabado',]
        return diaSemanaTexto[diaSemana]
    }

    function getMesTexto(mes) {
        // utilizando array
        const meses = ['janeiro', 'feveiro', 'março', 'abril', 'maio', 'junho',
            'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
        return meses[mes];

    }

    function criaH1() {
        return h1 = document.createElement('h1');
    }


    function zeroAEsquerda(num) {
        return num >= 10 ? num : `0${num}`;
    }

    function criaData(data) {
        const diaSemana = getDiaSemanaTexto(data.getDay());
        const dia = data.getDate();
        const mes = getMesTexto(data.getMonth());
        const ano = data.getFullYear();
        const hora = zeroAEsquerda(data.getHours());
        const min = zeroAEsquerda(data.getMinutes());

        return `${diaSemana}, ${dia} de ${mes} de ${ano}<br>${hora}:${min}`;
    }


    const div_texto = document.querySelector('.date');
    const data = new Date();

    data_texto = criaH1();
    data_texto.innerHTML = `${criaData(data)}`;
    div_texto.appendChild(data_texto);

}


meuEscopo();