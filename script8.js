//Exercices sur les tableaux

var taille = parseInt (window.prompt ("Entrez la taille de votre tableau"));

var montableau = [];
for (var i=0; i<taille; i++)
{
    var element= window.prompt ("Entrez les élements de votre tableau");
    var n= montableau.push(element);
};
console.log ("Le tableau ainsi créé est le suivant:" +montableau)