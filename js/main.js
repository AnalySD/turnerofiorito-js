const turnos = []

const mensajeInicial = "Selecciona el area de especialidad por el codigo numerico:"

function buscarEspecialidad(codigo) {
    let resultado = especialidades.find(especialidad => especialidad.codigo === parseInt(codigo))
        return resultado 
}

function iniciarConsulta() {
    let codigo = prompt(mensajeInicial)
        if (!parseInt(codigo)) {
            alerta(false,0,"error", "", "Error","turno no encontrado")
        }
        let especialidadElegida = buscarEspecialidad(codigo)
            turnos.push(especialidadElegida)
        let respuesta = confirm("¿Deseas gestionar otro turno?")
        if (respuesta) {
            iniciarConsulta()
        } else {
            finalizarConsulta()
        }
}

function verTurnos() {
    if (turnos.length > 0) {
        console.table(turnos)
    } else {
        console.warn("No tienes ningun turno!")
    }
}

function finalizarConsulta() {
    if (turnos.length === 0) {
        console.warn("No tienes ningun turno!")
        return 
    }
    
    const shopping = new Compra(turnos)
    alert(`Usted tiene un total de ${shopping.obtenerSubtotal()} turnos gestionados`)
    let respuesta = confirm("¿Deseas confirmar sus turnos?")
        if (respuesta) {
            alert(shopping.confirmarTurno())
            turnos.length = 0
        }
}

const alerta = (toast, timer, icon, position, title, text )=> {
    Swal.fire({
        toast: toast || false, 
        position: position || 'center', // top-end, bottom-end, top-start, center
        icon: icon || 'info',     //success, warning, error, question, info
        title: title || '',
        text: text || '',
        showConfirmButton: true,
        confirmButtonText: 'Aceptar',
        timer: timer
      })
}
