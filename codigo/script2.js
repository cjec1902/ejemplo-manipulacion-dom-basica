const h1 = document.querySelector ('h1');
const form = document.querySelector ('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');

// form.addEventListener('submit', sumarInputsValues);

// function sumarInputsValues(event) {
//     console.log({event});
//     event.preventDefault();
//     const sumaInputs = input1.value + input2.value;
//     result.innerText = "resultado: " + sumaInputs;
// }


btn.addEventListener('click', sumarInputsValues);

function sumarInputsValues(event) {
    const sumaInputs = input1.value + input2.value;
    result.innerText = "Resultado: " + sumaInputs;
}

