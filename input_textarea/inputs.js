window.addEventListener('load', function() {

    let inputs = document.querySelectorAll('.paragraph')
    let textarea = document.querySelector('.story')
    
    let arrayOfSentences = []

    for (let i = 0; i < inputs.length; i++) {
        arrayOfSentences.push(inputs[i].value);
        inputs[i].addEventListener('input', function(){
            arrayOfSentences[i] = this.value;
            getStory();
        })
      }

    function getStory(){
        textarea.value = arrayOfSentences.join(',')
    }
})