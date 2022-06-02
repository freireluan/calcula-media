
 function quimica (form){
    var quimica11 = form.quimicaprimeiro.value;
    var quimica22 = form.quimicasegundo.value;
    var quimica33 = form.quimicaterceiro.value;
    var quimica1 = parseInt(quimica11);
    var quimica2 = parseInt(quimica22);
    var quimica3 = parseInt(quimica33);
    soma = calculasoma(quimica1, quimica2, quimica3);
    mediaj = calculaMédiaM(quimica1, quimica2, quimica3);
    somaqumica.textContent = soma;
    mediaquimica.textContent = mediaj;
    return mediaj;
 }