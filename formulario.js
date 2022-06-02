 
var formresults = document.querySelector(".tabelaM");
var mediaartes = formresults.querySelector(".mediaArtes");
var somaartes = formresults.querySelector(".somaartes");
var somaBiologia = formresults.querySelector(".somaBio");
var mediaBiologia = formresults.querySelector(".mediaBio");
var somaEFisica = formresults.querySelector(".somaefisicae");
var mediaEFisica = formresults.querySelector(".mediafisicae");
var mediafilosofia = formresults.querySelector(".mediafil");
var somafiloosfia = formresults.querySelector(".somfil");
var somafisica = formresults.querySelector(".somafisica");
var mediafisica = formresults.querySelector(".mediafisica");
var somageografia = formresults.querySelector(".somageo");
var mediageografia = formresults.querySelector(".mediageo");
var somahistoria = formresults.querySelector(".somahist");
var mediahistoria = formresults.querySelector(".mediahist");
var mediaportugues = formresults.querySelector(".meidaport");
var somaportugues = formresults.querySelector(".somaport");
var somamatematica = formresults.querySelector(".somamate");
var mediamatematica = formresults.querySelector(".mediamate");
var mediaquimica = formresults.querySelector(".mediaq");
var somaqumica = formresults.querySelector(".somaq");
var somasociologia = formresults.querySelector(".somass");
var mediasociologia = formresults.querySelector(".mediass");
var mediaeFinanceira = formresults.querySelector(".mediafinan");
var somaEFinanceira = formresults.querySelector(".somafinan");
var somaingles = formresults.querySelector(".somain");
var mediaingles = formresults.querySelector(".mediain");

function calculaMédiaM(np, ns , nt){
   let mediaatt;
   if(divisor == 1){
      mediaatt = np;
   }
   if(divisor == 2){
      mediaatt = (np + ns)/divisor;
   }
   if(divisor == 3){
      mediaatt = (np + ns + nt)/divisor;
   }
   return mediaatt.toFixed(2);
  
};
function calculasoma(np, ns, nt){
  let calculasoma;
  if(divisor == 1){
     calculasoma = np;
  }
  if(divisor == 2){
   calculasoma = np + ns;
  }
 if(divisor == 3){
   calculasoma = np + ns + nt;
  }

   
   return calculasoma;
 
}













 
 
 
 

 
 
 
 
 
 
 

 
 

   

































