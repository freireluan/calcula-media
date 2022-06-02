var botão = document.querySelector("#tridivisor");
var divisor  = 0;
botão.addEventListener("click",function(event){
    event.preventDefault();
    var trimestresACalcular = form.numeroDeTrimestre.value;
    divisor = parseInt(trimestresACalcular);
    if(divisor < 4 && divisor > 0){
        console.log(divisor);

    }else{
        alert("Número de trimestres inválido, verifique e tente novamente!")
    }
    return divisor;
    
     
})
console.log(divisor);

