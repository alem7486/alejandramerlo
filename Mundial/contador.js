const getRemainTime = deadline => {
    let now = new Date (),
    remainTime = (new Date(deadline) - now + 1000)/1000,
    remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
    remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
    remainDays = Math.floor(remainTime/ (3600 * 24));

    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays,
    }
}

const countdown = (deadline, elem, finalMessage) => {
    const el = document.getElementById(elem);

    const timerUpdate = setInterval ( () => {
        let t = getRemainTime(deadline);
        el.innerHTML = `
            <div class="contenedorContando"> 
            <SPAN>El torneo comienza en</SPAN>
           
     
            <ul>
                <li class="titleContando"> DÍAS </li>
                <li class="subtitleContando"> ${t.remainDays} </li>
                </ul>

            <ul>
                <li class="titleContando"> HORAS </li>
                <li class="subtitleContando"> ${t.remainHours} </li>
             </ul>

             <ul>
             <li class="titleContando"> MINUTOS </li>
             <li class="subtitleContando"> ${t.remainMinutes}</li>
            </ul>

            <ul>
            <li class="titleContando"> SEGUNDOS </li>
            <li class="subtitleContando"> ${t.remainSeconds}</li>
           </ul>

        `;
        //<div class='contando'> día <br> ${t.remainDays} &nbsp </div> <div class='contando'> ${t.remainHours} </div> : <div class='contando'> ${t.remainMinutes} </div> : <div class='contando'>${t.remainSeconds}</div> <br> <div class="palabras>Días</div>


        if(t.remainTime <=1) {
            clearInterval(timerUpdate)
            el.innerHTML = finalMessage;
        }

        
    }, 1000)
}

countdown('Nov 20 2022 12:59:28 GMT-0300', 'contador1', 'Empieza el mundial')

//Formulario

const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const formulario = document.getElementById("formulario")
const parrafo = document.getElementById("alertas")

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
    }}
//    
        document.getElementById("formulario").submit()
        //parrafo.innerHTML = "Enviado"
    