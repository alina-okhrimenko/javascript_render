window.addEventListener('load', function() {

let lastLis = document.querySelectorAll('.root li ul li:last-of-type');

lastLis.forEach(function(li){
    setTimeout(function () {
        li.classList.add('last');
    }, 2000);
})

let level2 = document.querySelectorAll('.root ul')
console.log (level2)


function setFirstItemClassName(level) {
    level.forEach(function (lvl) {
        let firstElem = lvl.firstElementChild;
        setTimeout(function () {
            firstElem.classList.add(`first`);
        }, 2000);
    })
};

setFirstItemClassName(level2);

// ____________________________

// Работает для первого уровня:
// let level1 = document.querySelector('ul');

// function setFirstItemClassName(level){
//     level.firstElementChild.classList.add('first')
// }
// setFirstItemClassName(level1);

// Работает для второго уровня:
// let level2 = document.querySelectorAll('.root ul')
// function setFirstItemClassName2(level){
//         level.forEach(function(ul){
//             ul.firstElementChild.classList.add('first')
//         })
// }
// setFirstItemClassName2(level2);

});