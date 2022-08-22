const divDetails = document.getElementsByClassName('hotel-details')

class Hotel {

    constructor(id, nombre, direccion, habitaciones) {

        _this_.id = id

        _this_.nombre = nombre

        _this_.direccion = direccion

        _this_.habitaciones = habitaciones

    }

}

const testhotel = [

    _// disponibilidad_

    { single: 3, precio: 10000 }, { doble: 1 }, { triple: 5 }

]

const hotel1 = new Hotel(1, "Mar del Plata", "Tucumán 2375", testhotel, true)

const hotel2 = new Hotel(2, "Miramar", "Av. San Martín 1489", testhotel) _// false_

const hotel3 = new Hotel(3, "Necochea", "Centenario 144", testhotel, true)

const hotel4 = new Hotel(4, "San Bernardo", "La costa 3100", testhotel) _// false_

const hoteles = [hotel1, hotel2, hotel3, hotel4]

_[//habitaciones_](//habitaciones_%60%60%60)

class Habitacion {

    constructor(id, nombre) {

        _this_.id = id

        _this_.nombre = nombre

    }

}

const habitacion1 = new Habitacion(1, "Single")

const habitacion2 = new Habitacion(2, "Doble")

const habitacion3 = new Habitacion(3, "Triple")

const habitacion4 = new Habitacion(4, "Múltiple")

const habitaciones = [habitacion1, habitacion2, habitacion3, habitacion4]

_// Input date validation_

const dateControl = document.getElementById('inputDate1')

const hoy = new Date()

```const dateMin = `${hoy.getFullYear()}-0${hoy.getMonth() + 1}-${hoy.getDate()}````

dateControl.setAttribute('min', dateMin)

_//Validación de la búsqueda_

const idForm = document.getElementById('button-search')

idForm.addEventListener('submit', (evt) => {

evt.preventDefault()

    _// console.log("Hiciste clic", evt)_

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
