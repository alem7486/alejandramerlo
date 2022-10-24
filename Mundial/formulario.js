const nombre = document.getElementById("name")
const email = document.getElementById("email")
const formulario = document.getElementById("formulario")
const parrafo = document.getElementById("alertas")

//  e.preventDefault()
   function eventoClic(){

   
let alertas = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        alertas += `El nombre debe contener al menos 6 caracteres <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        alertas += `El correo no es válido <br>`
        entrar = true
    }
  
    if(entrar){
        parrafo.innerHTML = alertas
    }else{
        localStorage.setItem('usuario', JSON.stringify(nombre.value))

        document.getElementById("formulario").submit()
        //parrafo.innerHTML = "Enviado"
    }
}