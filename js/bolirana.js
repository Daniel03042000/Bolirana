
var input_1 = document.getElementById("puntaje_1");
var input_2 = document.getElementById("puntaje_2");
var puntaje_1, puntaje_2

var button = document.getElementById("play_again");


input_1.addEventListener("keyup", myResult);


function myResult(){
    //input_2.value = Number(input_1.value);
    if (input_1.value === ('')){
        input_2.value = ('');
    }
}


// funcion borrado para el boton
button.onclick = function(){
    input_1.value = ('');
    input_2.value = ('');
    
    
}


button_1.onclick = function(){
    puntaje_1 = input_1.value;
    puntaje_2 = input_2.value;
    
}

