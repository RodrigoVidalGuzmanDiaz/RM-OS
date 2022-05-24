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

