const divDetails = document.getElementsByClassName('hotel-details')

class Hotel {
    constructor(id, nombre, direccion, habitaciones) {
        this.id = id
        this.nombre = nombre
        this.direccion = direccion
        this.habitaciones = habitaciones
    }
}

const hotel1 = new Hotel(1, "Mar del Plata", "Tucumán 2375")
const hotel2 = new Hotel(2, "Miramar", "Av. San Martín 1489",)
const hotel3 = new Hotel(3, "Necochea", "Centenario 144")
const hotel4 = new Hotel(4, "San Bernardo", "La costa 3100", testhotel) // false

const hoteles = [hotel1, hotel2, hotel3, hotel4]

//Habitaciones
class Habitacion {
    constructor(id, nombre) {
        this.id = id
        this.nombre = nombre
    }
}

const habitacion1 = new Habitacion(1, "Single")
const habitacion2 = new Habitacion(2, "Doble")
const habitacion3 = new Habitacion(3, "Triple")
const habitacion4 = new Habitacion(4, "Múltiple")

const habitaciones = [habitacion1, habitacion2, habitacion3, habitacion4]

// Input date validation
const dateControl = document.getElementById('inputDate1')
const hoy = new Date()
const dateMin = `${hoy.getFullYear()}-0${hoy.getMonth() + 1}-${hoy.getDate()}`
dateControl.setAttribute('min', dateMin)


//Validación de la búsqueda
const idForm = document.getElementById('idForm')

idForm.addEventListener('submit', (evt) => {
evt.preventDefault()

    // console.log("Hiciste clic", evt)
    const select = document.getElementById('seleccionHotel')
    const hotelEncontrado = hoteles.find((element) => element.id == select.value);
    console.log(hotelEncontrado)

    let p = document.createElement("p")


    divDetails[0].append(`Dirección: ${hotelEncontrado.direccion}`, p)
    divDetails[0].append(`Habitaciones: ${JSON.stringify(hotelEncontrado.habitaciones)}`, p)

})


const inputText = document.getElementById('inputText')

inputText.addEventListener("change", () => {
    console.log(inputText.value)
})
