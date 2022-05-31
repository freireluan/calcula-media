function historia (form){
    var historia11 = form.historiaprimeiro.value;
    var historia22 = form.historiasegundo.value;
    var historia33 = form.historiaterceiro.value;
    var historia1 = parseInt(historia11);
    var historia2 = parseInt(historia22);
    var historia3 = parseInt(historia33);
    calculasoma(historia1, historia2, historia3);
    calculaMédiaM(historia1, historia2, historia3);
    var soma = calculasoma(historia1, historia2, historia3);
    var mediag = calculaMédiaM(historia1, historia2, historia3);
    somahistoria.textContent = soma;
    mediahistoria.textContent = mediag;
    return mediag;
 }