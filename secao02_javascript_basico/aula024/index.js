let umaString = "Um texto";
let umaString3 = 'Um "texto"';
let umaString1 = "Um \"texto\"";
let umaString2 = "Um \\texto";

console.log(umaString);
console.log(umaString1);
console.log(umaString.charAt(1));

// concatenacao;
console.log(umaString.concat(' em', ' um ', 'belo dia'));
console.log(umaString + ' em um belo dia.');
console.log(`${umaString} em um belo dia.`);


console.log(umaString.indexOf("texto"));
console.log(umaString.indexOf("Texto"));
console.log(umaString.indexOf("Um"));
console.log(umaString.indexOf("Um", 3));
console.log(umaString.indexOf("o", 3));


console.log('\n');
console.log(umaString.lastIndexOf("o"));
console.log(umaString.lastIndexOf("o", 3));
console.log(umaString.lastIndexOf("t", 4));
console.log(umaString.lastIndexOf("t"));

console.log('\n');
console.log(umaString.length);

console.log(umaString.slice(2, 5));

console.log('\n');
let rato = "O rato roeu a roupa do rei de roma."
console.log(rato.slice(-12, -1));
console.log(rato.substring(rato.length - 12, rato.length - 1));

console.log('\n');
console.log(rato.split(' '));
console.log(rato.split(' ', 2));


console.log(rato.toLowerCase());
console.log(rato.toUpperCase());

