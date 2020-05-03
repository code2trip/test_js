/*
touchstart	Событие срабатывает при возникновении касания к элементу.
touchmove	Событие возникает после того как пользователь прикоснулся к элементу, и перемещает палец в другую точку.
touchend	Событие возникает после разрыва прикосновения к элементу.
touchenter	Событие возникает при условии, что касание происходит в пределах элемента.
touchleave	Событие возникает, когда точка соприкосновения выходит за рамки элемента.
touchcancel	Событие возникает тогда, когда точка соприкосновения больше не регистрируется на поверхности. К примеру, перемещение за пределы браузера.

*/


window.addEventListener('DOMContentLoaded', function() {

    let box = document.querySelector('.box');
/*
        box.addEventListener('touchstart', function(e) {
            e.preventDefault();
            console.log("Red box: touchstart");
            console.log(e.target);
            console.log(e.touches[0].target);
            console.log(e.changedTouches);
            console.log(e.targetTouches);
        });
*/


    box.addEventListener('touchmove', function(e) {
        e.preventDefault();
        console.log("Red box: " + e.touches[0].pageX);

    });
/*
    box.addEventListener('touchend', function(e) {
        e.preventDefault();
        console.log("Red box: touchend");

    }); */

});