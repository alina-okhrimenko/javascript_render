window.addEventListener('load', function(){

    const block = document.querySelector('.block')
    const text = document.querySelector('.text')


    document.onkeydown = pressKey;

    function pressKey(arrow) {
        if (arrow.keyCode == '38') {
            block.style.top = block.offsetTop - 20 + 'px'
        }
        else if (arrow.keyCode == '40') {
            block.style.top = block.offsetTop + 20 + 'px'
        }
        else if (arrow.keyCode == '37') {
            block.style.left = block.offsetLeft - 20 + 'px'
        }
        else if (arrow.keyCode == '39') {
            block.style.left = block.offsetLeft + 20 + 'px'
            console.log(block.style.right)
        }

        if (!isBlockInWindow()) {
            text.innerHTML = 'БЭМС'
            let bounce = setTimeout(() => text.innerHTML = '', 2000)
            return;
        }
    }


    function isBlockInWindow() {

        if (block.offsetLeft <= 0) {
            block.style.left = 20 + 'px';
            return false;
        }

        if (block.offsetTop <= 0) {
            block.style.top = 20 + 'px';
            return false;
        }
        if (block.offsetLeft + block.offsetWidth >= window.innerWidth) {
            block.style.left = window.innerWidth - block.offsetWidth - 20  + 'px';
            return false;
        }
        if (block.offsetTop + block.offsetHeight >= window.innerHeight) {
            block.style.top = window.innerHeight - block.offsetHeight - 20  + 'px';
            return false;
        }

        return true;
    }

});