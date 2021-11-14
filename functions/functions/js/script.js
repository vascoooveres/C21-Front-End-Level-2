let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom?  _____door de Str_________ vul je antwoord in op de lijn
let myInt = 9; //dit is een variabele van het datatype _______integer_____ waarom? ______Door Int______ vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? _____Dat zorgt ervoor dat een variabele declareert_______ vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen ______lijn 17________ vul je antwoord in op de lijn

    // vul in wat naam is: naam is de Parameter___________ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde ____________ de waarde noemen we een Alert__________ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een __Melding_____ op het scherm met de tekst ___Any?______ deze tekst staan op regel __17_____ van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? _____Nee______ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? _________Ze laten de elementen niet zien__________ en waar wordt deze in je HTML aangeroepen? ____id hide________ vul je antwoorden in op de lijn
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML ____id show_______ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? _______Retourneert een verwijzing naar het eerste object met de opgegeven waarde van het ID-attribuut____________ vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? ___Het laat de elementen erin zien en niet laten hide_______32_________ vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen ___regel 30___________ en wanneer wordt deze aangeroepen ___________ vul je antwoord in op de lijn

    let antwoord = myInt - getal; //waar komt de waarde van myInt vandaan ____regel 2__________ en waar komt de waarde van getal vandaan? ____________ vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? ______het is geschikt een enkel element te zoeken en te selecteren _____________  Wat is antwoord hier? vul je antwoorden in op de lijn
    
    //wat gebeurt er in deze functie? ____Het berekent een som en laat vervolgens het antwoord zien_________________ vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? ______Er komt een hoger antwoord uit _______________ vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt?
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen _____regel 38______ vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan ____Tussen de haakjes__________ en waar komt de waarde van kleur vandaan? ____Tussen de haakjes________ vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van size vandaan? ___Tussen de haakjes_________ vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? ________de size en de kleur worden veranderd_____________ vul je antwoord in op de lijn
}

getName(myInt);
// wat gebeurd er hierboven ___het laat een bericht zien________ en wanneer gebeurt dat ___wanneer je refresht _______ (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? __laat een cijfer zien________________ vul je antwoord in op de lijn.