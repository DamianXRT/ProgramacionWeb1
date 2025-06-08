function cambiartema(){
    const body = document.querySelector('body');
    const boton = document.querySelector('.cambio');

    if(body.classList.contains('tema-oscuro')){
        body.classList.remove('tema-oscuro');
        body.classList.add('tema-claro');
        boton.textContent = 'Cambiar a tema Oscuro';
    }else{
        body.classList.remove('tema-claro');
        body.classList.add('tema-oscuro');
        boton.textContent = 'Cambiar a tema Claro';
    }
}

