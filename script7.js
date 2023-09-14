// function multiply (x, y){
//     var resultat = x*y;
//     return resultat;
// }



var x = window.prompt("Veuillez saisir un nombre x");
var y = window.prompt("Veuillez saisir un nombre y");
afficheImg("img/papillon.jpg");

function produit(x,y)
{
    var resultat =  x*y;
    return resultat;
}
let P = produit (x,y);
document.getElementById("demo").innerHTML = "Le résultat de "+ x + " * " + y +" = " + P;


function cube (x)
{
    var resultat2 = x*x*x;
    return resultat2
}
let c = cube (x)
document.getElementById("demo2").innerHTML = "Le cube de " + x + " = " +c;
 
function afficheImg(papillon)
{
     document.getElementById("monimage").setAttribute ("src", papillon);

}


// var str1 = "robert ;dupont ;amiens ;80000";
// var str2 = ";";
// var n = 2;

// function strtok (str1, str2, n){
//    var myarray = str1.split(str2);
//    var word = myarray [n];
//    return word;
// }
// console.log (strtok (str1, str2, n));

// var str1 = "je, suis ,en ,formation, à l'Afpa";
// var str2 = ",";
// var n = 3;
// function strtok (str1, str2, n)
// {
//     var tableau = str1.split (str2);
//     var mot = tableau [n];
//     return mot;
// }
// console.log(strtok (str1, str2, n));

// var x = window.prompt ("Entrez un nombre");
// var y = window.prompt ("Entrez un deuxième nombre");
// afficheImg ("img/7.jpg")

// function produit (x,y)
// {
//     var resultat = x*y;
//     return resultat; 
// }
// let p = produit (x,y);
// document.getElementById("toto").innerHTML= "Le résultat de" + x + "*" +y+ "=" +p;

// function afficheImg (image)
// {
//     document.getElementById ("myimage").setAttribute ("src", image);
// }
