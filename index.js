const inputANode = document.querySelector('.js-number-a');
const inputBNode = document.querySelector('.js-number-b');
const selectOperationNode = document.querySelector('.js-select-operation');
const btntResultTNode = document.querySelector('.js-btn-result');
const inputOutputNode = document.querySelector('.js-output');

btntResultTNode.addEventListener('click', function() {
    const a = Number(inputANode.value);
    const b = Number(inputBNode.value);
    const operations = selectOperationNode.value;

    const result = calculate({a,b, operations});

    inputOutputNode.innerHTML = "Hello World";

    console.log(result)
    
});
   
