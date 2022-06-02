function geografia (form){
    var geografia11 = form.geografiaprimeiro.value;
    var geografia22 = form.geografiasegundo.value;
    var geografia33 = form.geografiaterceiro.value;
    var geografia1 = parseInt(geografia11);
    var geografia2 = parseInt(geografia22);
    var geografia3 = parseInt(geografia33);
    soma = calculasoma(geografia1, geografia2, geografia3);
    mediaf = calculaMédiaM(geografia1, geografia2, geografia3);
    somageografia.textContent = soma;
    mediageografia.textContent = mediaf;
    return mediaf;
 }