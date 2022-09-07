const response = document.querySelector("#resp");


let valueContador = 0;


function adicionar(){
    response.value = valueContador+=1
    console.log(valueContador)
}

function diminuir(){
   
    if(valueContador<=0){
        valueContador = 0
        console.log(valueContador)
    }
    else{
        response.value = valueContador-=1
    }

}