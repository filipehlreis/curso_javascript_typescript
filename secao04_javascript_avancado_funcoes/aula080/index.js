/**
 * Funcoes Geradoras
 */

function* geradora1() {
    // Codigo qualquer...
    console.log('\n1');
    yield 'Valor 1';
    // Codigo qualquer...
    console.log('\n2');
    yield 'Valor 2';
    // Codigo qualquer...
    console.log('\n3');
    yield 'Valor 3';
    // Codigo qualquer...
    console.log('\n4');
    yield 'Valor 4';
}

const g1 = geradora1();
// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next());


// for (let valor of g1) {
//     console.log(valor);
// }



function* geradora2() {
    let i = 0;
    while (true) {
        yield i;
        i++;
    }
}

const g2 = geradora2();
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());



function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}


const g4 = geradora4();
for (let valor of g4) {
    console.log(valor);
}



function* geradora5() {
    yield function () {
        console.log('Vim do y1');
    };
    // codigo aqui


    /**
     * return faz com que a fncao geradora acabe neste ponto, todo o codigo 
     * restante se torna inacansavel.
     */
    return function () {
        console.log('vim do return');
    }

    yield function () {
        console.log('Vim do y2');
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;

func1();
func2();
// func3();