// Example

const HAMBURGER = {
	
	price: 0,
    calories: 0,
    
    size: {
        small: {
            price: 5,
            calories: 20
        },

        large: {
            price: 10,
            calories: 40
        },
    },

    stuffings: {
        cheese: {
            price: 1,
            calories: 20
        },

        salad: {
            price: 2,
            calories: 5
        },

        fries: {
            price: 1.5,
            calories: 10
        },
    },

    extra: {
        seasoning: {
            price: 1.5,
            calories: 0
        },

        mayo: {
            price: 2,
            calories: 5
        }
    }
}
console.log(HAMBURGER);


class Burger{
	constructor(size = {}, stuffings={}, extra={}){
		this.size = size;
		this.stuffings = stuffings;
        this.extra = extra;
	}

    set razmer(razmer){
        if (!this.size){
            this.size = {};
        }
        this.size[razmer.name] = razmer;
    }

    set nachinka(nachinka){
        if (!this.stuffings){
            this.stuffings = {};
        }
        this.stuffings[nachinka.name] = nachinka;
    }

    set dobavka(dobavka){
        if (!this.extra){
            this.extra = {};
        }
        this.extra[dobavka.name] = dobavka;
    }

    calculatePrice(){
        let sum = this.size.price;
            sum += this.stuffings.price;
            sum += this.extra.price
            return sum;
    }
    calculateCalories(){
        let kkal = this.size.calories;
            kkal += this.stuffings.calories;
            kkal += this.extra.calories
            return kkal;
    }
}

let Order1 = new Burger ('small');
Order1.size = HAMBURGER.size.small
Order1.stuffings = HAMBURGER.stuffings.fries
Order1.extra = HAMBURGER.extra.mayo

let price = Order1.calculatePrice()
console.log(price)

let calories = Order1.calculateCalories()
console.log(calories);


