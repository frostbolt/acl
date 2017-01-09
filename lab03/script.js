console.clear();
var text = prompt('Введите текст','').toLowerCase();	
var words = text.split(/[\s\p{P}]/);
console.log(words.sort());
