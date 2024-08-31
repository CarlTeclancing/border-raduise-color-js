let box = document.querySelector('div');
let input = document.querySelector('input');

input.addEventListener('input', function(){
    box.style.borderRadius = input.value;
    box.style.backgroundColor = input.value;
})