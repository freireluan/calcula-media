function artes (form){
    var artes11 = form.arteprimeirorte.value;
    var artes22 = form.artesegundo.value;
    var artes33 = form.arteterceiro.value;
    var artes1 = parseInt(artes11);
    var artes2 = parseInt(artes22);
    var artes3 = parseInt(artes33);
    soma = calculasoma(artes1, artes2, artes3);
    mediaa = calculaMédiaM(artes1, artes2, artes3);
    somaartes.textContent = soma;
    mediaartes.textContent = mediaa;
    return mediaa;
 }