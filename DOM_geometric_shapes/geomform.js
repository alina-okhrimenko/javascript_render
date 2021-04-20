// на странице находятся элементы:
// div - фигура, которая может принимать какие-то формы
// select - выбрать тип фигуры (квадрат, прямоугольник, круг). При изменении значения в нем, меняется фигура
// input для выбора цвета. При его изменении меняется цвет фигуры

window.addEventListener('load', function() {

    let figure = document.querySelector('#figure1');
    let shapeSelect = document.querySelector('#shape-select')
    let colorInput = document.querySelector('[type="color"]');

    shapeSelect.addEventListener('change', shapePicker)
    colorInput.addEventListener('change', colorPicker)

    function colorPicker(){
        let selectedColor = colorInput.value
        figure.style.backgroundColor = `${selectedColor}`
    }

    function resetColor(){
        figure.style.backgroundColor = ``
    }

    function resetClassList(){
        figure.className = ''
        figure.innerHTML = ''
    }

    function shapePicker(){
        let selectedValue = shapeSelect.value
     
        if (selectedValue == "square"){
            resetColor()
            resetClassList()
            figure.classList.add('square')
        }
        else if (selectedValue == "rectangle"){
            resetColor()
            resetClassList()
            figure.classList.add('rect')
        }
        else if (selectedValue == "circle"){
            resetColor()
            resetClassList()
            figure.classList.add('circle')
           }
        else {
          alert ("Please choose your shape!")
         }
     }
    
})