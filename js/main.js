//Funcion 

function desplegarMenu(){
    /*variables que harán la accion*/
    var ico_menu = document.getElementById('ico_menu');
    var ico_menu2  = document.getElementById('ico_menu2');
    /*variables que reciben la accion*/
    var menu_opciones_desplegado = document.getElementById('menu_opciones_desplegado');
    var menu_deplegado = document.getElementById('menu_deplegado');
    /*clases agregadas a las variables*/
    menu_opciones_desplegado.classList.add('activarFlex')
    menu_deplegado.classList.add('activar');

    ico_menu.classList.add('desactivar')
    ico_menu2.classList.add('activarBoton');
}
function cerrarMenu(){
    /*variables que harán la accion*/
    var ico_menu = document.getElementById('ico_menu');
    var ico_menu2  = document.getElementById('ico_menu2');
    /*variables que reciben la accion*/
    var menu_opciones_desplegado = document.getElementById('menu_opciones_desplegado');
    var menu_deplegado = document.getElementById('menu_deplegado');
    /*clases desagregadas a las variables*/
    menu_opciones_desplegado.classList.remove('activarFlex')
    menu_deplegado.classList.remove('activar');
    
    ico_menu.classList.remove('desactivar')
    ico_menu2.classList.remove('activarBoton');
}  
function explorador() {
    var x = document.getElementById('ventanaExplorador')
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
function cerrarVentana(){
    var ventanaExplorador = document.getElementById('ventanaExplorador')
    var cerrar = document.getElementById('cerrar')
    if(ventanaExplorador.style.display == "none"){

    }else{
        ventanaExplorador.style.display = "none";
    }    
}
cerrar.addEventListener('click', cerrarVentana )

function minimizarVentana(){
    var ventanaExplorador = document.getElementById('ventanaExplorador')
    var minimizar = document.getElementById('minimizar')
    if(ventanaExplorador.style.display == "none"){

    }else{
        ventanaExplorador.style.display = "none";
    }    
}
minimizar.addEventListener('click', minimizarVentana)

function maximizarVentana(){
    var maximizar = document.getElementById('maximizar')
    var normalizar = document.getElementById('normalizar')
    var ventanaExplorador = document.getElementById('ventanaExplorador')

    ventanaExplorador.classList.add('maximizarVentana')
    maximizar.classList.add('desactivar')
    normalizar.classList.add('activar')
}
maximizar.addEventListener('click', maximizarVentana)

function normalizarVentana(){
    var maximizar = document.getElementById('maximizar')
    var normalizar = document.getElementById('normalizar')
    var ventanaExplorador = document.getElementById('ventanaExplorador')
    
    ventanaExplorador.classList.remove('maximizarVentana')
    maximizar.classList.remove('desactivar')
    normalizar.classList.remove('activar')
}
normalizar.addEventListener('click', normalizarVentana)

function apagarEquipo(){
    var escritorio = document.getElementById('escritorio')
    
    var mensaje_de_apagado = document.getElementById('mensaje_de_apagado')

    escritorio.classList.add('desactivar')
    mensaje_de_apagado.classList.add('activarFlex')
}
var botonApagar = document.getElementById('apagar')
botonApagar.addEventListener('click', apagarEquipo)

function encenderEquipo(){
    var escritorio = document.getElementById('escritorio')
    
    var mensaje_de_apagado = document.getElementById('mensaje_de_apagado')

    escritorio.classList.remove('desactivar')
    mensaje_de_apagado.classList.remove('activarFlex')
}
var botonEncender = document.getElementById('encender')
botonEncender.addEventListener('click', encenderEquipo)