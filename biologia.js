function Biologia (form){
    var Biologia11 = form.Biologiaprimeiro.value;
    var Biologia22 = form.Biologiasegundo.value;
    var Biologia33 = form.Biologiaterceiro.value;
    var Biologia1 = parseInt(Biologia11);
    var Biologia2 = parseInt(Biologia22);
    var Biologia3 = parseInt(Biologia33);
    
    soma = calculasoma(Biologia1, Biologia2, Biologia3);
    mediab = calculaMédiaM(Biologia1, Biologia2, Biologia3);
    somaBiologia.textContent = soma;
    mediaBiologia.textContent = mediab;
    return mediab;
 }