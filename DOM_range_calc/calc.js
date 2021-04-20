window.addEventListener('load', function() {
    let range = document.querySelector('[type="range"]');
    let number = document.querySelector('[type="number"]');
    let block = document.querySelector('.blockgreen');
    let tax = document.querySelector('.blockred');
    let max = +(range.max);
    
    range.addEventListener('mousedown', function () {
        this.addEventListener('mousemove', move);
    });

    range.addEventListener('mouseup', stop);

    number.addEventListener('click', function () {
        range.value = this.value;
        rangeDiagramm (range.value, block);
        taxDiagramm (range.value, tax);
    });

    number.addEventListener('blur', function () {
        range.value = this.value;
        rangeDiagramm (range.value, block);
        taxDiagramm (range.value, tax);
    });

    function move() {
        number.value = this.value;
        rangeDiagramm (number.value,block);
        taxDiagramm (number.value,tax);
    }

    function stop() {
        range.removeEventListener('input', move);
    }

    function rangeDiagramm (value, elem) {
        elem.style.height = value + 'px';
    }

    function taxDiagramm(value, elem) {
        if (value <= 20 ) {
            elem.style.height = percentage(max, 2) + 'px';
        } else if (value > 20 && value <= 50) {
            elem.style.height = percentage(max, 4) + 'px';
        } else if (value > 50 && value <= 75) {
            elem.style.height = percentage(max, 6) + 'px';
        } else if (value > 75 && value <= 100){
            elem.style.height = percentage(max, 8) + 'px';
        }
    }

    function percentage(number, percents){
        return result = number/100*percents;
    }
})




