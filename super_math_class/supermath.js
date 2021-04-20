
// / Создать класс SuperMath с методом check(obj), параметр obj которого имеет свойства X, Y, znak.

// Пример объекта: obj = { X: 12, Y: 3, znak: “/”}, возможные варианты znak => + - / * %.
// При вводе znak нужно сделать проверку корректности ввода на возможные математические действия.

// Метод check должен подтвердить у пользователя хочет ли он произвести действие znak c Х и У.
// Если - да, сделать математическое действие znak(которое описано в классе),
// иначе - запросить ввод новых данных через метод input() с класса SuperMath.

// let obj = {
//     x: 12,
//     y: 3,
//     znak: "/",
// }

let operations = {
    '+': function (x, y) {return x + y},
    '-': function (x, y) {return x - y},
    '/': function (x, y) {if (y == 0) {
        console.error('You can not divide by zero!');
       }
       return x / y},
    '*': function (x, y) {return x * y},
};

function doMath(x, y, znak) {
    return operations[znak](x, y);
}

class superMath{
    constructor(x, y, znak){
        this.x = x,
        this.y = y,
        this.znak = znak
    }

    check(){
        let confirmInput = confirm(`Do you want to do ${this.znak} with ${this.x} and ${this.y}?`);
        if (confirmInput) {
            let res = doMath(this.x, this.y, this.znak);
            alert(`Your result is ${res}.`)
            } else {
                this.input();
                this.check();
            }
        }

    input(){
        this.x = +prompt(`Type in the first number:`, 0);
        this.y = +prompt (`Type in the second number:`, 0);
        this.znak = prompt(`What do you want to do with these numbers? Choose one operation: '+', '-', '*', '/'.`)

        return {
            x: Number(this.x),
            y: Number(this.y),
            znak: this.znak,
        }
    }
}

let p = new superMath(15,3,'/');
p.check();