const toggleButton = document.getElementById('toggle-theme');
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");

let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

function cambiarTextoPorId(idElemento, nuevoTexto) {
  const elemento = document.getElementById(idElemento);
  if (elemento) {
    elemento.textContent = nuevoTexto;
  } else {
    console.warn(`No se encontró el elemento con ID: ${idElemento}`);
  }
}


function asignarTextoElemento(eLemento, texto){
    let elementoHTML = document.querySelector(eLemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('intento').setAttribute('disabled',true);
    } else {
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero es menor');
        } else {
            asignarTextoElemento('p', 'El numero es mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function condicionesIniciales(){
    cambiarTextoPorId('texto_inicial', 'JUEGO DEL NUMERO SECRETO');
    cambiarTextoPorId('texto_ingrese', `Ingrese un numero del 1 al ${numeroMaximo}.`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //generar el numero aleatorio
    document.getElementById('reiniciar').setAttribute('disabled',true);
    document.getElementById('intento').removeAttribute('disabled');
    //inicializar el numero de intentos

}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;    
    // 
    console.log(numeroGenerado);
    console.log(numerosSorteados);
    // Si ya sorteamos todos los numeros.

    if(numerosSorteados.length === numeroMaximo){
        cambiarTextoPorId('texto_ingrese','Ya se sortearon todos los numeros.' );
        document.getElementById('intento').setAttribute('disabled',true);
    } else{

        if(numerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            numerosSorteados.push(numeroGenerado);
            return(numeroGenerado);
        }
    }
}

condicionesIniciales();





if (currentTheme === "dark") {
  document.body.classList.add("dark-theme");
} else if (currentTheme === "light") {
  document.body.classList.remove("dark-theme");
} else if (prefersDarkScheme.matches) {
  document.body.classList.add("dark-theme");
}

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});