console.clear();
var text = prompt('Введите текст','').toLowerCase();
console.log(text);
var words = text.split(/[\s\p{P}]/);
console.log(words.sort());