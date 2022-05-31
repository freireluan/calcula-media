function Efinanceira (form){
    var Efinanceira11 = form.Efinanceiraprimeiro.value;
    var Efinanceira22 = form.Efinanceirasegundo.value;
    var Efinanceira33 = form.Efinanceiraterceiro.value;
    var Efinanceira1 = parseInt(Efinanceira11);
    var Efinanceira2 = parseInt(Efinanceira22);
    var Efinanceira3 = parseInt(Efinanceira33);
    calculasoma(Efinanceira1, Efinanceira2, Efinanceira3);
    calculaMédiaM(Efinanceira1, Efinanceira2, Efinanceira3);
    var soma = calculasoma(Efinanceira1, Efinanceira2, Efinanceira3);
    var medial = calculaMédiaM(Efinanceira1, Efinanceira2, Efinanceira3);
    somaEFinanceira.textContent = soma;
    mediaeFinanceira.textContent = medial;
    return medial;
 }