const h1 = document.querySelector ('h1');
const p = document.querySelector ('p');
const parrafito = document.getElementsByClassName ('parrafito');
const pid = document.getElementById ('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});


h1.innerHTML = 'Patito <br> feo';
h1,innerText = 'Patito <br> feo';
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');

input.value = "456";

const img = document.createElement('img');
img.setAttribute('src','https://images.app.goo.gl/izAgWXgn8q17Jr2w9');
console.log(img);


pid.appendChild(img);