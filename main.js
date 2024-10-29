//alert("Mensaje de bienvenida");

//console.log('Mensaje de bienvenida');

const miNombre = "Luis Miguel";

let dias = 2;

const spanName = document.querySelector('#name');

spanName.textContent = miNombre;

const spanNum = document.querySelector('.tiempo');

spanNum.textContent = dias * 14;

spanNum.addEventListener('click', (e) => {
    dias++;
    e.target.textContent = dias;
});