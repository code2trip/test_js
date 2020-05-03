/*
    рекурсивный вызов setTimeout, чтобы функция, чтобы не было задержки функции,
    когда время ее выполнения дольше, чем вся указанное время в setTimeout
    про анимации:

    https://learn.javascript.ru/js-animation
*/


/* let timerId = setTimeout(sayHello, 3000);

clearTimeout(timerId); 



let timerId = setInterval(sayHello, 3000);

//clearTimeout(timerId); 


function sayHello() {
    
    console.log('Hello World!');

}


let timerId = setTimeout(function log(){
    console.log("Hello");
    setTimeout(log, 2000);

});

*/
