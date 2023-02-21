let result = confirm("desea sacar un turno?")

function iniciarConsulta() {
    if (result == false) {
        alert("Hasta Luego!")
        return
    } else {
        sacarTurno()
    }
}

function sacarTurno() {
    for (let i = 1; i <= 3; i++) {
        let nombre = prompt("Ingrese su Nombre:")
        if (nombre != null) {
            alert(nombre + " tiene el numero " + i)
            alert("Hasta Luego!")
        } else { alert("por favor ingrese un nombre valido") }
    }
}

iniciarConsulta()
