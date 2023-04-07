//const carrito = []
const container = document.getElementById("container")
const inputSearch = document.querySelector("input#inputSearch")
const URL = "json/turnos.json"
const especialidades = []

fetch(URL)
    .then((response)=> data = response.json())
    .then ((data) => especialidades.push (...data))
    .then (()=> cargarEspecialidades (especialidades))
    .then (()=> activarClickBotones ())
    .catch (error => console.error (error))


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
    const botonesAdd= document.querySelectorAll("button.button-add")
    botonesAdd.forEach(btn => {
        btn.addEventListener("click", ()=> {
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
                activarClickBotones ()
            } else {
                Swal.fire(
                    'Oops!',
                    'No se encontraron coincidencias!',
                    'error'
                  )
            }
        }            
            inputSearch.addEventListener("search", ()=> {
                if (inputSearch.value.trim() !== "") {
                    filtrarEspecialidades()
                } else {
                    cargarEspecialidades(resultado)
                }
            })


           