function fisica (form){
    var fisica11 = form.fisicaprimeiro.value;
    var fisica22 = form.fisicasegundo.value;
    var fisica33 = form.fisicaterceiro.value;
    var fisica1 = parseInt(fisica11);
    var fisica2 = parseInt(fisica22);
    var fisica3 = parseInt(fisica33);
    calculasoma(fisica1, fisica2, fisica3);
    calculaMédiaM(fisica1, fisica2, fisica3);
    var soma = calculasoma(fisica1, fisica2, fisica3);
    var mediae = calculaMédiaM(fisica1, fisica2, fisica3);
    somafisica.textContent = soma;
    mediafisica.textContent = mediae;
    return mediae;
 }