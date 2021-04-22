

window.addEventListener('load', function() {

    let goose = document.querySelector('.goose');
    let img = document.querySelector('.img');

    let top = 0;
    let left = 0;

    document.addEventListener('keydown', keyCodeSwitch);


    function keyCodeSwitch(arrow) {
        if (arrow.keyCode == '38') {
            goose.style.top = goose.offsetTop - 20 + 'px';
            
        }
        else if (arrow.keyCode == '40') {
            goose.style.top = goose.offsetTop + 20 + 'px';
        }
        else if (arrow.keyCode == '37') {
            goose.style.left = goose.offsetLeft - 20 + 'px';
            goose.style.transform = 'rotateY(0deg)';
        }
        else if (arrow.keyCode == '39') {
            goose.style.left = goose.offsetLeft + 20 + 'px';
            goose.style.transform = 'rotateY(180deg)';
        }
        else if (arrow.keyCode == '32') {
            jump();
        }
        else if (arrow.keyCode == '17') {
            sit();
        }
        if (!isGooseInWindow()) {
            return;
        }
    }

    function isGooseInWindow() {

        if (goose.offsetLeft <= 0) {
            goose.style.left = 1 + 'px';
            return false;
        }

        if (goose.offsetTop <= 0) {
            goose.style.top = 1 + 'px';
            return false;
        }
        if (goose.offsetLeft + goose.offsetWidth >= window.innerWidth) {
            goose.style.left = window.innerWidth - goose.offsetWidth - 1  + 'px';
            return false;
        }
        if (goose.offsetTop + goose.offsetHeight >= window.innerHeight) {
            goose.style.top = window.innerHeight - goose.offsetHeight - 1  + 'px';
            return false;
        }

        return true;
    }

let isJumping = false;

function jump(){
    if (isJumping==true) {
        return true;
    } 
    isJumping = true;
    setTimeout (() =>{
        isJumping = false;
    }, 500)

    img.style.transition = '2s';
    goose.style.top = goose.offsetTop - 80 + 'px';
    setTimeout(() => {
        goose.style.top = goose.offsetTop  + 80 + 'px';
    }, 100)      
}

function sit(){
    img.style.width = '80%';
    img.style.height = '60%';

    setTimeout(() => {
        img.style.width = '100%';
        img.style.height = '100%';
    }, 700) 
}

let menu = document.querySelector(".right-click-menu");
let mainmenu = document.querySelector('.main-click-menu');

goose.addEventListener( "contextmenu", event => {
    event.preventDefault(); // отменяет вспылитие дефолтного контекстного меню
    event.stopPropagation()
    menu.style.top = `${event.clientY}px`;
    menu.style.left = `${event.clientX}px`;
    positionMenu();
    menu.classList.add("active");
}, );

function positionMenu() {
    clickCoordsX = event.clientX;
    clickCoordsY = event.clientY;
   
    menuWidth = menu.offsetWidth + 5;
    menuHeight = menu.offsetHeight + 5;
   
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
   
    if ( (windowWidth - clickCoordsX) < menuWidth ) {
      menu.style.left = windowWidth - menuWidth + "px";
    } else {
      menu.style.left = clickCoordsX + "px";
    }
   
    if ( (windowHeight - clickCoordsY) < menuHeight ) {
      menu.style.top = windowHeight - menuHeight + "px";
    } else {
      menu.style.top = clickCoordsY + "px";
    }
  }

document.addEventListener("click", event => {
    if (event.button !== 2) {
        menu.classList.remove("active");
    }
},);

menu.addEventListener("click", event => {
    event.stopPropagation(); // отменяет закрытие пунктов контекстного меню при клике на них
},);

document.getElementById('l1').addEventListener('click', jump); 

document.querySelector("#l2").addEventListener("click", () => {
    goose.style.left = parseInt(left) + 'px';
    left -= 50;
    goose.style.transform = 'rotateY(0deg)';
},);

document.querySelector("#l3").addEventListener("click", () => {
    goose.style.left = parseInt(left) + 'px';
    left += 50;
    goose.style.transform = 'rotateY(180deg)';
},);

 let image = document.querySelector('.img');
 let images = [
     './images/1.png',
     './images/2.png',
     './images/3.png',
     './images/4.png',
     './images/5.png',
 ]

document.querySelector("#l4").addEventListener("click", () => {
    image.src = images[Math.floor(Math.random()*images.length)];
},);

// main page сontext menu

document.addEventListener( "contextmenu", event => {
    event.preventDefault();  
    event.stopPropagation()
    mainmenu.style.top = `${event.clientY}px`;
    mainmenu.style.left = `${event.clientX}px`;
    positionMainMenu()
    mainmenu.classList.add("active");
    addMainMenuListeners();
}, );



function positionMainMenu() {
    clickCoordsX = event.clientX;
    clickCoordsY = event.clientY;
   
    menuWidth = mainmenu.offsetWidth + 5;
    menuHeight = mainmenu.offsetHeight + 5;
   
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
   
    if ( (windowWidth - clickCoordsX) < menuWidth ) {
      mainmenu.style.left = windowWidth - menuWidth + "px";
    } else {
      mainmenu.style.left = clickCoordsX + "px";
    }
   
    if ( (windowHeight - clickCoordsY) < menuHeight ) {
      mainmenu.style.top = windowHeight - menuHeight + "px";
    } else {
      mainmenu.style.top = clickCoordsY + "px";
    }
  }



document.addEventListener("click", event => {
    if (event.button !== 2) {
        mainmenu.classList.remove("active");
    }
},);

mainmenu.addEventListener("click", event => {
    event.stopPropagation(); 
},);


function addMainMenuListeners(){
    document.getElementById('c1').addEventListener('click', removeCharacter);
    document.getElementById('c2').addEventListener('click', resetPosition);
}

function removeCharacter(){
    is_sure = window.confirm('Are you sure you want to remove your character?'); 
    if(is_sure) 
     {
        goose.remove();
   }
   else
     {window.alert("OK. I can stay.");
   }
}

function resetPosition(){
    goose.style.left = 0 + 'px';
    goose.style.top = 0 + 'px';
}

});


