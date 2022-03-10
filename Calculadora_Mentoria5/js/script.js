var display = document.querySelector("#display");

// Mostrar no display os números teclados
function showDisplay(value){
    display.value += value;
}

// Limpar display
function clearAll(){
    display.value = "";
}

// Mostrar resultado
function result(){
    let solucao = eval(display.value);
    display.value = solucao;

    if(display.value == "undefined"){
        display.value = "";
    }
}