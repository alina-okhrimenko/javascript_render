
let kitchenProducts = [
	{
		type: 'grater',
		price: 10,
		icon: true
	},
	{
		type: 'pastry-bag',
		price: 25,
		icon: true
	},
	{
		type: 'scale',
		price: 5,
		icon: true
	},
	{
		type: 'whisk',
		price: 15,
		icon: true
	}
];

let devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000],
		icon: true
	},
	{
		type: 'laptop',
		price: [50,1500],
		icon: true
	},
	{
		type: 'smartphone',
		price: [80,2000],
		icon: true
	},
	{
		type: 'tablet',
		price: [20,1300],
		icon: true
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100,
		icon: true
	},
	{
		type: 'eyeshadow',
		price: 50,
		icon: true
	},
	{
		type: 'lipstick',
		price: 80,
		icon: true
	},
	{
		type: 'nail-polish',
		price: 200,
		icon: true
	},
	{
		type: 'perfume',
		price: 300,
		icon: true
	}
];

// Задание 1.
// Для каждой категории создать объект, 
// который имеет лишь одно свойство category, в котором находится имя категории. Например, let Kitchen = {category: 'kitchen'};

function Card(category){
	this.category = category;
}

Card.prototype.render = function(){
	let image = ``;
	if(this.icon){
		image = `<img src="images/${this.category}/${this.type}.svg" alt="${this.type}" height = '60px'>`;
	}

	let div = `<div class="card">
	<div class="img">${image}</div>
	<p>Name: <b>${this.type}</b></p>
	<p>Price: <b>$${this.price}</b></p>
	</div>`;

	return div;
};


let Cosmetics = new Card('cosmetics');
let Kitchen = new Card('kitchen');
let Devices = new Card('devices');


function addPrototype(arr,proto){
	let withProto = arr.map(function(product){
		let newProduct = Object.create(proto);
		for(let key in product){
			newProduct[key] = product[key];
		}
		return newProduct;
	})

	return withProto;
}

// / Задание 2:
// Всем товарам с массивов kitchenProducts, devicesProducts, cosmeticsProducts добавить в качестве объекта-прототипа объекты, 
// созданные на первом шаге. После этого, дополнить каждый товар своими свойствами. Например:
// let grater = Object.create(Kitchen);
// grater.type = 'grater';
// grater.price = 10;
// Для выполнения второго задания пользуемся перебирающими методами массивов. Руками перебор не делаем! ;)

let devicesProto = addPrototype(devicesProducts, Devices);
let cosmeticsProto = addPrototype(cosmeticsProducts, Cosmetics);
let kitchenProto = addPrototype(kitchenProducts, Kitchen);

function renderCard(arr){
	return arr.map(function(card){
		return card.render();
	})
}


function renderCategory(arr){
	document.write(`
	    <h2>Category: ${arr[0].category}</h2>
		<div class="productCategory" data-category="${arr[0].category}">
			${renderCard(arr).join('')}
		</div>
		<hr>
	`);
}

renderCategory(devicesProto);
renderCategory(cosmeticsProto);
renderCategory(kitchenProto);



