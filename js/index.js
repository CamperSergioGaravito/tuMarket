import { filaTabla } from "./templates.js";

/* Captura de datos */
const producto = document.getElementById('producto');
const precio = document.getElementById('precio');
const dataTable = document.getElementById('dataTable');
const btnIngresar = document.getElementById('btnIngresar');

const productos = [];

function validarInput(input) {
    if(input === '' || parseInt(input) < 0) {
        return input = '0';
    }
    else {
        return input;
    }
}

function clickTr(e) {
    if(e.target.id === 'modificar') {
        const btn = e.target;
        const tr = e.target.offsetParent.parentElement;
    
        /* console.log(btn) */
        /* console.log(e) */

        const btnConfirmar = e.target.offsetParent.querySelector('#confirmar');
        btnConfirmar.disabled = false;
        btn.disabled = true;
        const input = tr.querySelector('input');
        input.disabled = false;
        input.style = 'border: 1px #0d6efd solid';
        btnConfirmar.addEventListener('click', () => {
            /* console.log(parseInt(input.value)) */
            /* console.log(input.value,typeof(input.value)) */

            input.value = validarInput(input.value);

            if(parseInt(input.value) < 100) {
                const valor = parseInt(tr.querySelector('#precioProd').textContent);
                tr.querySelector('#precioProd').textContent = valor - (valor * (input.value / 100));
                input.style = 'border: none';
                input.disabled = true;
                btn.disabled = false;
                btnConfirmar.disabled = true;
            }

            else {
                alert('El porcentaje no puede ser mayor a 100.');
                return;
            }
        })
    }
    else {
        return;
    }
}

btnIngresar.addEventListener('click',(e) => {
    if(producto.value != '' && precio.value != 0) {
        e.preventDefault()
        const templateProducto = {
            id: productos.length+1,
            nombre: producto.value,
            precio: precio.value,
            descuento: 0
        }

        productos.push(templateProducto);
        const tempItem = filaTabla(templateProducto)
        const tr = document.createElement('tr');
        tr.insertAdjacentHTML('beforeend',tempItem)

        const btnsMC = tr.children[tr.children.length-1].querySelectorAll('button');
        /* console.log(btnsMC) */
        btnsMC.forEach(btn => {
            btn.addEventListener('click',clickTr)
        })
        

        dataTable.insertAdjacentElement('beforeend',tr);
        producto.value = '';
        precio.value = '';
    }

    else {
        return
    }
})