function matematica (form){
    var matematica11 = form.matematicaprimeiro.value;
    var matematica22 = form.matematicasegundo.value;
    var matematica33 = form.matematicaterceiro.value;
    var matematica1 = parseInt(matematica11);
    var matematica2 = parseInt(matematica22);
    var matematica3 = parseInt(matematica33);
   
    var soma = calculasoma(matematica1, matematica2, matematica3);
    var mediai = calculaMédiaM(matematica1, matematica2, matematica3);
    somamatematica.textContent = soma;
    mediamatematica.textContent = mediai;
    return mediai;
 }