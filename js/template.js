const carrito = JSON.parse(localStorage.getItem("carrito")) || []

function retornoCard(especialidad) {
    return `<div class="card" id="card${especialidad.codigo}">
                <div class="card-image">${especialidad.imagen}</div>
                <div class="card-name">  ${especialidad.nombre} </div>
                <div class="card-button">
                    <button class="button-add" id="${especialidad.codigo}" title="Clic para agregar '${especialidad.nombre}' a tu lista"> Pedir Turno </button> </div>
            </div>`
    }

    function armarTablaTurnos (especialidad){
        return `<tr>
                    <td>${especialidad.imagen}</td>
                    <td>${especialidad.nombre}</td>
                    <td>${especialidad.cantidad}</td>
                    <td> <button class= "button-delete" id="${especialidad.nombre}"> <img src="../images/pngegg.png" width="30px"> </button></td>
                </tr>`
    }
    