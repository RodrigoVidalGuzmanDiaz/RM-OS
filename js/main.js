var menu_deplegado = document.getElementById('menu_deplegado');
var ico_menu = document.getElementById('ico_menu');

//Funcion 
function clickIco_menu(){
    menu_deplegado.classList.add('activar');
}
//Evento
ico_menu.addEventListener('click', clickIco_menu);