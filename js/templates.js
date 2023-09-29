export function filaTabla(producto) {
    const template = //html
                    `
                        <th scope="row">${producto.id}</td>
                        <td>${producto.nombre}</td>
                        <td>$<span id="precioProd">${producto.precio}</span></td>
                        <td>
                            <input class="textDesc text-center inputInyect" type="number" value="${producto.descuento}" disabled>
                        </td>
                        <td>
                            <div class="container-fluid d-flex align-items-center justify-content-evenly ">
                                <button id="modificar" class="btn btn-primary d-flex align-items-center justify-content-center text-center btnMod">Modificar</button>
                                <button id="confirmar" class="btn btn-success d-flex align-items-center justify-content-center text-center btnMod" disabled>Confirmar</button>
                            </div>
                        </td>
                    `
    
    return template
}