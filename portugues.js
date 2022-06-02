function portugues (form){
    var portugues11 = form.portuguesprimeiro.value;
    var portugues22 = form.portuguessegundo.value;
    var portugues33 = form.portuguesterceiro.value;
    var portugues1 = parseInt(portugues11);
    var portugues2 = parseInt(portugues22);
    var portugues3 = parseInt(portugues33);
    soma = calculasoma(portugues1, portugues2, portugues3);
    mediah = calculaMédiaM(portugues1, portugues2, portugues3);
    somaportugues.textContent = soma;
    mediaportugues.textContent = mediah;
    return mediah;
 }