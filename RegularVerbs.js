/*
Флаги:

i - флаг регистра
g - глобальный регистр 
m - многострочность

class:

\d - найти все цифры
\w - найти все буквы
\s - все пробелы

*/
let ans = prompt('Введите ваше имя!');

let reg = /n/ig;

//console.log(ans.search(reg));

//console.log(ans.match(reg));

console.log(reg.test(ans));

//let pass = prompt('Введите пароль');

//console.log(pass.replace(/./g, "*"));
//alert('12-34-56'.replace(/-/g, ':'));
