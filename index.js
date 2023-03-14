class Gestion {
    constructor (turnos) {
        this.turnos = turnos
    }

    obtenerSubtotal () {
        if (turnos.length >0) {
            return this.turnos.reduce ((acc, especialidad)=> acc + especialidad.cantidad, 0)
        } else {
            return "Error inesperado"
        }
    }
    
    confirmarTurno (){
        if (this.obtenerSubtotal () !== "Error Inesperado") {
            return `Confirmamos la cantidad de ${this.obtenerSubtotal ()} turnos \n Muchas gracias! Lo esperamos.` 
        } else {
            return "Error en la validacion. Ningun turno fue confirmado"
        }
    }
}

const turnos = []

const especialidades = [{imagen: '🧠', codigo: 1, tipo: "Neurologia", cantidad: 1},
                        {imagen: '🤍', codigo: 2, tipo: "Cardiologia", cantidad: 1},
                        {imagen: '🦻🏻', codigo: 3, tipo: "Fonoaudiologia", cantidad: 1},
                        {imagen: '🦷', codigo: 4, tipo: "Odontologia", cantidad: 1},
                        {imagen: '👶', codigo: 5, tipo: "Pediatria", cantidad: 1},
                        {imagen: '🦴', codigo: 6, tipo: "Traumatologia", cantidad: 1}]

const mensajeInicial = "Selecciona el area de especialidad por el codigo numerico:"

function buscarEspecialidad(codigo) {
    let resultado = especialidades.find(especialidad => especialidad.codigo === parseInt(codigo))
        return resultado 
}

function iniciarConsulta() {
    let codigo = prompt(mensajeInicial)
        if (!parseInt(codigo)) {
            alert("⛔️ Error en el código ingresado.")
            return 
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
    
    const shopping = new Gestion (turnos)
    alert(`Usted tiene un total de ${shopping.obtenerSubtotal()} turnos gestionados`)
    let respuesta = confirm("¿Deseas confirmar sus turnos?")
        if (respuesta) {
            alert(shopping.confirmarTurno())
            turnos.length = 0
        }
}