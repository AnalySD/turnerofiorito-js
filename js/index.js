const container = document.getElementById("container")
const inputSearch = document.querySelector("input#inputSearch")
const URL = "https://63b04d8cf9a53fa20265e446.mockapi.io/api/especialidades" || "json/turnos.json"
const especialidades = []
const carrito = JSON.parse(localStorage.getItem("carrito")) || []

function retornoCard(especialidad) {
    return `<div class="card" id="card${especialidad.codigo}">
                <div class="card-image">${especialidad.imagen}</div>
                <div class="card-name">  ${especialidad.nombre} </div>
                <div class="card-button">
                    <button class="button-add" id="${especialidad.codigo}" title="Clic para agregar '${especialidad.nombre}' a tu lista"> Pedir Turno </button> </div>
            </div>`
}

function cargarEspecialidades(array) {
    let contenido = ""
    if (array.length > 0) {
        array.forEach(especialidad => {
            contenido += retornoCard(especialidad)
        })
        container.innerHTML = contenido
    }
}

function activarClickBotones() {
    const botonesAdd = document.querySelectorAll("button.button-add")
    botonesAdd.forEach(btn => {
        btn.addEventListener("click", () => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Turno agregado!',
                showConfirmButton: false,
                timer: 1500
              })
            let resultado = especialidades.find(esp => esp.codigo === parseInt(btn.id))
            carrito.push(resultado)
            localStorage.setItem("carrito", JSON.stringify(carrito))
        })
    })
}

function filtrarEspecialidades() {
    let resultado = especialidades.filter(especialidad => especialidad.nombre.toUpperCase().includes(inputSearch.value.toUpperCase().trim()))
    if (resultado.length > 0) {
        cargarEspecialidades(resultado)
        activarClickBotones()
    } else {
        Swal.fire(
            'Oops!',
            'No se encontraron coincidencias!',
            'error'
        )
    }
}
inputSearch.addEventListener("keypress", (evento) => {
    if (evento.key !== "Enter") return
    if (inputSearch.value.trim() !== "") {
        filtrarEspecialidades()
    } else {
        cargarEspecialidades(resultado)
    }
})

fetch(URL)
    .then((response) => data = response.json())
    .then((data) => especialidades.push(...data))
    .then(() => cargarEspecialidades(especialidades))
    .then(() => activarClickBotones())
    .catch(error => console.error(error))

