const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');


/** Escrevendo um objeto em arquivo JSON */
// const pessoas = [
//     {
//         nome: 'Joao',
//         idade: 12
//     },
//     {
//         nome: 'Maria',
//         idade: 21
//     },
//     {
//         nome: 'Filipe',
//         idade: 35
//     },
//     {
//         nome: 'Luiz',
//         idade: 41
//     },
// ];

// const json = JSON.stringify(pessoas, '', 2);

// escreve(caminhoArquivo, json);


/**Lendo um determinado arquivo */
async function leArquivo(caminho) {
    const dados = await ler(caminho);
    // return dados;
    renderizaDados(dados);
}

// const dadosArquivo = leArquivo(caminhoArquivo)
//     .then(dados => console.log(dados));

function renderizaDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val));
}

leArquivo(caminhoArquivo);