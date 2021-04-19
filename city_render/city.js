let roadHorizontal = `<tr><td colspan="9" class="road"><div class="markings"></div></td></tr>`;
let roadVertical = `<td class="roadV"><div class="markingsV"></div></td>`;

let grass = `<td class="grass"></td>`;
let cars = ['1','2','3','4']

let fields = [
    'images/activities/football.jpg',
    'images/activities/hockey.jpg',
    'images/activities/swimming.jpg',
    'images/activities/trees.jpg',
    'images/activities/whale.jpg'
]; 

let houses = [
    'images/houses/blue.svg',
    'images/houses/pink.svg',
    'images/houses/purple.svg',
    ]

let carwidth = 30;

function lot(numberOfCars){ 
	let parkedCars = []; 
    let parkingWidth = carwidth*numberOfCars
	for(let i=0; i<numberOfCars; i++){
		let car = cars[Math.floor(Math.random()*cars.length)]; 
		parkedCars.push(`<img src="images/cars/${car}.svg" width="${carwidth}"></img>`); 
	}

	let lotTd = `<td class='parkingLot' width='${parkingWidth}'><div class="cars">${parkedCars.join(' ')}</div></td>`; 
	return lotTd;
}


function townHouses(horizCount){
    
    let house = houses[Math.floor(Math.random()*houses.length)];
    let home = `<img src="${house}" width="30px"></img>`
    let emptyland = `<img width="30px"></img>`
    
    let housesstr = home.repeat(horizCount)
    let housesvip = '<br\/>' + `${home}` + (emptyland.repeat(horizCount - 2)) + `${home}` + '<br\/>'

    let housesTd = `<td class='houses' width='100px'>
        <div class ='buildings'>
            ${housesstr}
            ${housesvip}
            ${housesstr}
        </div>
    </td>`; 
  
    return housesTd;
}

function buildActive(){
    urlString = fields[Math.floor(Math.random()*fields.length)]

    let element = `<td class ="activityfield">
      <img class="activityimage" src="${urlString}"></img>
    </td>`

    return element;
}


function renderCity(){

    let parkingSteet = `
        <tr>
           ${grass} 
           ${roadVertical}
           ${lot(3)}
           ${roadVertical}
           ${lot(5)}
           ${roadVertical}
           ${lot(4)}
           ${grass} 
        </tr>
    `

    let sunsetBlvrd = `
        <tr>
            ${grass} 
            ${roadVertical}
            ${townHouses(3)}
            ${roadVertical}
            ${townHouses(4)}
            ${roadVertical}
            ${townHouses(3)}
            ${grass} 
        </tr>
    `
    let activities = `
        <tr>
            ${grass} 
            ${roadVertical}
            ${buildActive()}
            ${roadVertical}
            ${buildActive()}
            ${roadVertical}
            ${buildActive()}
            ${grass} 
        </tr>
    `

    let town = `
        <table>
            ${parkingSteet}
            ${roadHorizontal}
            ${sunsetBlvrd}
            ${roadHorizontal} 
            ${activities} 
        </table>`;
    document.write(town);
}


renderCity()