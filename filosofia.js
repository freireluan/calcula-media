function Filosofia (form){
    var Filosofia11 = form.Filosofiaprimeiro.value;
    var Filosofia22 = form.Filosofiasegundo.value;
    var Filosofia33 = form.Filosofiaterceiro.value;
    var Filosofia1 = parseInt(Filosofia11);
    var Filosofia2 = parseInt(Filosofia22);
    var Filosofia3 = parseInt(Filosofia33);
    calculasoma(Filosofia1, Filosofia2, Filosofia3);
    calculaMédiaM(Filosofia1, Filosofia2, Filosofia3);
    soma = calculasoma(Filosofia1, Filosofia2, Filosofia3);
    mediad = calculaMédiaM(Filosofia1, Filosofia2, Filosofia3);
    somafiloosfia.textContent = soma;
    mediafilosofia.textContent = mediad;
    return mediad;
     
 }