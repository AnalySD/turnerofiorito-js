const URL = "json/turnos.json"
const carrito = JSON.parse(localStorage.getItem("carrito")) || []

function armarTablaTurnos(especialidad) {
    return `<tr>
                <td>${especialidad.imagen}</td>
                <td>${especialidad.nombre}</td>
                <td>${especialidad.cantidad}</td>
                <td> <button class= "button-delete" id="${especialidad.nombre}"> <img src="../images/pngegg.png" width="30px"> </button></td>
            </tr>`
}

function recuperarCarrito() {
    const tbody = document.querySelector("tbody")
    const carrito = JSON.parse(localStorage.getItem("carrito")) || []
   
    let tablaHTML = ""
    if (carrito.length >= 0) {
        carrito.forEach(especialidad => {
            tablaHTML += armarTablaTurnos(especialidad)
        })
        tbody.innerHTML = tablaHTML
    }
}
recuperarCarrito()

function activarBotonesDelete() {
    const buttonsDelete = document.querySelectorAll("button.button-delete")
    buttonsDelete.forEach(btn => {
        btn.addEventListener("click", () => {
            let pos = carrito.findIndex(especialidad => especialidad.nombre === btn.id)
            
            if (pos > -1) {
                carrito.splice(pos, 1)
                localStorage.setItem("carrito", JSON.stringify(carrito))
                recuperarCarrito()
                activarBotonesDelete()
            }
        })
    })
}
activarBotonesDelete()

const btnConfirm = document.querySelector("#btnConfirm")

btnConfirm.addEventListener("click", () => {
    Swal.fire({
        icon: "question",
        title: "¿Confirmas los turnos?",
        showCancelButton: true,
        confirmButtonText: "Confirmo!",
        cancelButtonText: "Cancelar",
    })
        .then(result => {
            if (result.isConfirmed) {
                localStorage.removeItem("carrito")
                carrito.length = 0
                Swal.fire("turnos confirmados", "te esperamos!", "success")
                    .then(() => {
                        location.href = "../index.html"
                    })
            }
        })
})
