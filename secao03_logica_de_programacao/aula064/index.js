/**
 * Dica aleatoria para programacao:
 * Sempre que o codigo comecar a se afastar muito da margem, pode ser 
 * indicativo de má pratica de programacao. Sempre buscar deixar poucas 
 * identacoes.
 */


// try {
//     // é executada quando nao ha erros
//     // console.log(a);
//     console.log('Abri um arquivo.');
//     console.log('Manipulei o arquivo e gerou erro.');
//     console.log('Fechei o arquivo.');

//     try {
//         console.log(b);
//     } catch (e) {
//         console.log('Deu erro');
//     } finally {
//         console.log('tambem sou finally');
//     }

// } catch (e) {
//     // é executada quando ha erros
//     console.log('Tratando o erro.');
// } finally {
//     // sempre
//     console.log('FINALLY: Eu sempre sou executado.');
// }

// console.log();







function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        console.log('Não é');
        throw new TypeError('Esperando instancia de Date');
    }
    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    })
}

try {
    const dataa = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);

} catch (error) {
    // tratar erro

} finally {
    console.log('Tenha um bom dia');
}



// retornaHora(new Date());



