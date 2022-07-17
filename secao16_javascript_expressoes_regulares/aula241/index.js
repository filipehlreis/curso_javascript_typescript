const { texto, arquivos, html } = require('../base');


const regExp1 = /<.+>.+<\/.+>/g; // greedy
const regExp2 = /<.+?>.+?<\/.+?>/g; // non-greedy


console.log(html.match(regExp1))
console.log(html.match(regExp2))

