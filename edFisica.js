function EFisica (form){
    var EFisica11 = form.EFisicaprimeiro.value;
    var EFisica22 = form.EFisicasegundo.value;
    var EFisica33 = form.EFisicaterceiro.value;
    var EFisica1 = parseInt(EFisica11);
    var EFisica2 = parseInt(EFisica22);
    var EFisica3 = parseInt(EFisica33);
    
    soma = calculasoma(EFisica1, EFisica2, EFisica3);
    mediac = calculaMédiaM(EFisica1, EFisica2, EFisica3);
    somaEFisica.textContent = soma;
    mediaEFisica.textContent = mediac;
    return mediac;
 
     
 }