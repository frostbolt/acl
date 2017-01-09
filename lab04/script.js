// 1

console.clear();
var text = prompt('Введите текст','').toLowerCase();
console.log(text)
var words = text.split(/[\s\p{P}]/);
console.log(words.sort());


// 2

console.clear();
var text = prompt('Введите текст','').toLowerCase();
console.log(text.replace(/([A-zА-я]+)(?= \1)/g, ''));

// 3 - задание в отдельном файле. 

// 4

console.clear();
var text = prompt('Введите текст','').toLowerCase();
console.log(text.replace(/(\d),(\d)/g, '$1.$2'));


// 5
console.clear();
var text = prompt('Введите текст','').toLowerCase();
console.log((/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(text));

// 6

// Текст, содержащий несколько url ftp://examp.le http://te.st https://this.st

console.clear();
var text = prompt('Введите текст','').toLowerCase();
var regexp = /https?:\/\/((?:[\w]+\.)+[A-z]{2,4})/g;
while (temp = regexp.exec(text)) {
	console.log(temp[0]);
}

// 7 - задание в отдельном файле. 

// 8 - задание в отдельном файле.

