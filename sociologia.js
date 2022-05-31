function Sociologia (form){
    var Sociologia11 = form.Sociologiaprimeiro.value;
    var Sociologia22 = form.Sociologiaegundo.value;
    var Sociologia33 = form.arteterceiro.value;
    var Sociologia1 = parseInt(Sociologia11);
    var Sociologia2 = parseInt(Sociologia22);
    var Sociologia3 = parseInt(Sociologia33);
    soma = calculasoma(Sociologia1, Sociologia2, Sociologia3);
    mediak = calculaMédiaM(Sociologia1, Sociologia2, Sociologia3);
    somasociologia.textContent = soma;
    mediasociologia.textContent = mediak;
    return mediak;
 }