function ingles (form){
    var ingles11 = form.inglesprimeiro.value;
    var ingles22 = form.inglessegundo.value;
    var ingles33 = form.inglesterceiro.value;
    var ingles1 = parseInt(ingles11);            
    var ingles2 = parseInt(ingles22);           
    var ingles3 = parseInt(ingles33);            
    calculasoma(ingles1, ingles2, ingles3);
    calculaMédiaM(ingles1, ingles2, ingles3);
    var soma = calculasoma(ingles1, ingles2, ingles3);
    var mediay = calculaMédiaM(ingles1, ingles2, ingles3);
    somaingles.textContent = soma;
    mediaingles.textContent = mediay;
    return mediay;
 }