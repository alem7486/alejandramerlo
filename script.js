const divDetails = document.getElementById('hotelDetails')
const buttonSearch = document.getElementById('buttonSearch')

const MarDelPlata = {id: 1, direccion: 'Peralta Ramos 2500',
    habitacion: {
        single: {precio: 2000, cantidad: 25},
        doble: {precio: 3000, cantidad: 30},
        triple: {precio: 4000, cantidad: 20},
        multiple: {precio: 5000, cantidad: 15}
    }
}

const Miramar = {id: 2, direccion: 'Av. 9 1174',
    habitacion:{
        single: {precio: 1500, cantidad: 20},
        doble: {precio: 2000, cantidad: 15},
        triple: {precio: 2500, cantidad: 10}
    }
}

const Necochea = {id: 3, direccion: 'Centenario 215',
    habitacion:{
        single: {precio: 1800, cantidad: 16},
        doble: {precio: 2100, cantidad: 15},
        triple: {precio: 2700, cantidad: 10}
    }
}
const SanBernardo = {id: 4, direccion: 'La costa 901',
    habitacion:{
        single: {precio: 1600, cantidad: 9},
        doble: {precio: 2000, cantidad: 7},
        triple: {precio: 2200, cantidad: 5}
    }
}

const hoteles = [MarDelPlata, Miramar, Necochea, SanBernardo]


// Input date validation
const dateControl = document.getElementById('inputDate1')
const hoy = new Date()
const dateMin = `${hoy.getFullYear()}-0${hoy.getMonth() + 1}-${hoy.getDate()}`
dateControl.setAttribute('min', dateMin)


//Validación de la búsqueda
const idForm = document.getElementById('idForm')

idForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    
    //mostrar seleccion
    const select = document.getElementById('seleccionHotel', 'habitacionElegida')
    const hotelEncontrado = hoteles.find((element) => element.id == select.value);
    console.log(hotelEncontrado)
    
    let p = document.createElement("p")
    
    
    divDetails.innerHTML=`
    Dirección: ${hotelEncontrado.direccion}, 
    Habitación: ${hotelEncontrado.habitacion}`

    
})

localStorage.setItem('eleccion', JSON.stringify(hoteles))

buttonSearch.addEventListener('click', () => {
    const eleccionStorage = JSON.parse(localStorage.getItem('eleccion'))
})

buttonSearch.addEventListener('click',()=>{
    divDetails.innerHTML=''
})

const inputText = document.getElementById('inputText')

inputText.addEventListener("change", () => {
    console.log(inputText.value)
})
