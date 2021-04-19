sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];

// 1. С массива sports с помощью метода .slice() скопировать в новый массив summer_sports массивы, 
// которые относятся к летним видам спорта.

let summer_sports = sports.slice(5,11)
// console.log(summer_sports)


console.log('***Summer sports***')
for (let i=0; i < summer_sports.length; i++ ){
    for (let j=0; j<summer_sports[j].length; j++){
        console.log(summer_sports[i][0] + ':' + summer_sports[i][1])
    }
}

// 2. С массива sports с помощью метода .slice() скопировать в новый массив winter_sports массивы,
//  которые относятся к зимним видам спорта.

let winter_sports = sports.slice(0, 5)
// console.log(winter_sports)

console.log('\n***Winter sports***')
for (let i=0; i < winter_sports.length; i++ ){
    for (let j=0; j<winter_sports[j].length; j++){
        console.log(winter_sports[i][0] + ':' + winter_sports[i][1])
    }
}

// 3. С полученных массивов summer_sports и winter_sports вырезать в новый массив fruits те массивы, которые относятся к фруктам.

let fruits =  winter_sports.splice(2,1).concat(summer_sports.splice(2,2))
console.log('\n***Fruits***')
for (let i=0; i < fruits.length; i++ ){
    for (let j=0; j<fruits[j].length; j++){
        console.log(fruits[i][0] + ':' + fruits[i][1])
    }
}

// console.log(fruits)