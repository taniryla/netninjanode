const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

const input = process.argv[2];


const langCode = franc(input);
if (langCode === 'und') {
    console.log('sorry couldnt figure it outerHeight.toExponential.apply.try with more sample text ');
}
const language = langs.where("3", langCode);
console.log(`our best guess is: ${language.name}`.green);