hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];

// 1. Объединить массивы destination, native, hero в общий массив rainbow.

let rainbow = hero.concat(native, destination);
console.log(rainbow)

// 2. Сделать реверс элементов полученного массива rainbow.
let rainbowreversed = rainbow.reverse()
console.log(rainbowreversed)

// 3. Изменить/добавить элементы массива rainbow так, 
// чтобы в итоге получился массив вида ['Richard','Of','York','Gave','Battle','In','Vain'];
// console.log(rainbow)

for (let i=0; i<rainbow.length; i++){
    rainbow[0] = "Richard";
    rainbow.splice(1, 5, 'of', 'York', 'Gave','Battle','In')
}
rainbow.push('Vain')
console.log(rainbow)

// 4. Вывести элементы полученного массива в html в виде, который представлен в прикрепленном рисунке rainbow.png.


let rainbow_colors = ['🔴', '🟠', '🟡', '🟢', '🔵','🔵', '🟣', ]

document.write('<div class="rowwrap">')

  for (i = 0; i < rainbow_colors.length; i++) {
    document.write('<div class="element">');
    document.write(`<div class="icon"> ${rainbow_colors[i]}</div>`);
    document.write(`<div class="title"> ${rainbow[i]} </div>`)
    document.write('</div>')
}
document.write('</div class="rowwrap">')



