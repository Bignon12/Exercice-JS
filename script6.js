//Exercice 2 (bOUCLE) 
// var N=parseInt (prompt ("Entrez un nombre"));
// if (isNaN(N)) {
//     console.log("Ce n'est pas un nombre valide");
// }
// else {
//     console.log("Nombre inférieur à " + N + ":")
// }
// for (i=0; i<N; i++) 
// {
//     console.log (i);
// }
// console.log ("fin de la boucle");


//Exercice 3 boucle
// var somme = 0;
// var nbentier = 0;
// while (true) 
// {
//     var a = prompt("Entrez un nombre entier (nombre négatif ou champ vide pour arrêter");
//     if (a === "")
//     {
//         break;
//     }
//     var entier = parseInt (a);
//     if (isNaN(entier)) 
//     {
//         console.log("ce nombre n'est pas valide. Réessayez");
//         continue;
//     }
//     if (entier <= 0) 
//     {
//         break;
//     }
//     somme += entier;
//     nbentier++;
// }
//     if (nbentier === 0) 
//     {
//         console.log("Aucun entier saisi");
//     }
//     else 
//     {
//         var moyenne = somme / nbentier;
//         console.log("La somme des entiers saisis est: " + somme);
//         console.log("La moyenne des enitiers saisis est: " + moyenne);
//     }


//Exercice 4
// var N= prompt ("Entrez le nombre de multiples à calculer");
// var X = prompt ('Entrez le nombre pôur lequel vous voulez calculer les multiples');
// if (isNaN(N) || isNaN (X) || N <= 0) 
// {
//     console.log ("Veuillez entrer des valeurs numériques et N doit être supérieur à zéro");
// }
// else 
// {
//     console.log(`Les ${N} premiers multiples de ${X} sont :`);
//     for (i=1; i<= N; i++)
//     {
//         console.log (X + " * " + i + " = " + i*X);
//     }
// }
  
// // //Exercice 5
// // Demander à l'utilisateur de saisir un mot
// var mot = prompt("Entrez un mot :");

// // Convertir le mot en minuscules pour compter les voyelles indépendamment de la casse
// mot = mot.toLowerCase();

// // Définir une variable pour stocker le nombre de voyelles
// var nombreVoyelles = 0;

// // Parcourir chaque caractère du mot
// for (var i = 0; i < mot.length; i++) {
//     // Vérifier si le caractère courant est une voyelle (a, e, i, o, u)
//     if ("aeiou".indexOf(mot.charAt(i)) !== -1) {
//         nombreVoyelles++;
//     }


// // Afficher le nombre de voyelles dans le mot
// console.log("Le nombre de voyelles dans le mot est : " + nombreVoyelles);

var mot = prompt ("Saisissez un mot");
mot = mot.toLowerCase();
var nbvoyelle = 0;
for (var i = 0; i < mot.length; i++)
{
    if ("aieouy".indexOf(mot.charAt(i)) !==-1)
    {
        nbvoyelle++;
    }
}
console.log ("le nombre de voyelles dans le mot est:" +nbvoyelle);