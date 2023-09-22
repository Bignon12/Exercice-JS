//Exercice 1
// var nb20=0;
// var nb40=0;
// var nb20et40=0;
// var nbcent=0;
// while (true)
// {
//    var age =parseInt(prompt("Entrez un age ou 100 pour arrêter"));
//     if (isNaN(age))
//     {
//         console.log ("Entrez un nombre valide");
//         break;
//     }
 
//     else if (age<20)
//     {
//         nb20++
//     }
//     else if (age >= 20 && age <= 40)
//     {
//         nb20et40++
//     }
//     else if (age > 40)
//     {
//         nb40++
//     }
//     if (age === 100)
//     {
//       nbcent++
//       break;
//     }
//   }
//     console.log ("les ages compris entre 20 et 40 sont: " +nb20et40);
//     console.log ("les ages strictement inférieurs à 20 sont: " +nb20);
//     console.log ("Les ages strictement supérieurs à 40 sont: " +nb40);
//     console.log ("les centenaires sont " +nbcent)


// //Exercice 2
// function tablemultipli(nombre)
// {
//   if (isNaN(nombre))
//   {
//     console.log("Entrez un nombre valide");
//   }
//   else{
//     console.log(`table de multiplication de"  ${nombre} :`)
//     for (var i=1; i<= 10; i++)  
//     console.log(`${nombre} x ${i} = ${nombre * i}`);
//   }
// }
// tablemultipli(7)


//Exercice 3
// var tab =["Audrez", "Aurelien", "Flavien", "Jérémi", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphani"];
// var prenom = prompt("Entrez le prénom à rechercher :");
// var indiceP = tab.indexOf(prenom);
// var nb = tab.length
// if (indiceP !== -1) 
// {
//   for (let i = indiceP; i < nb - 1; i++) {
//     tab[i] = tab[i + 1];
//   }
//   tab[nb - 1] = ""; 
//   console.log("Prénom supprimé :", prenom);
//   console.log("Nouveau tableau :", tab);
// } 
// else 
// {
//   console.log("Prénom non trouvé. Aucun prénom supprimé")
// }

//Exercice4

// # Saisie du prix unitaire (PU) et de la quantité commandée (QTECOM)
// PU = float(input("Entrez le prix unitaire du produit : "))
// QTECOM = int(input("Entrez la quantité commandée : "))

// # Calcul du total (TOT)
// TOT = PU * QTECOM

// # Calcul de la remise (REM)
// if 100 <= TOT < 200:
//     REM = 0.05 * TOT
// else:
//     REM = 0.10 * TOT

// # Calcul du prix total après remise (PRIX_REM)
// PRIX_REM = TOT - REM

// # Calcul du port (PORT)
// if PRIX_REM > 500:
//     PORT = 0
// else:
//     PORT = max(0.02 * PRIX_REM, 6)  # Le port est au moins de 6 €

// # Calcul du prix à payer (PAP)
// PAP = PRIX_REM + PORT

// # Affichage des résultats
// print(f"Le total est de {TOT} €")
// print(f"La remise est de {REM} €")
// print(f"Le port est de {PORT} €")
// print(f"Le prix à payer est de {PAP} €")



var PU = parseFloat(prompt("Entrez le prix unitaire du produit"));
var QTECOM = parseInt(prompt("Entrez la quantité commandée"));
var TOT = PU*QTECOM;
var REM=0;

if (TOT >=100 && TOT<= 200)
{
  REM= TOT*0.05;

}
else if (TOT > 200)
{
  REM = TOT*0.1;
}
var PREM = TOT-REM
if (PREM > 500) 
{
  var PORT = 0;
}
else 
{
  PORT = Math.max(0.02*PREM, 6)
}
var PAP = PREM + PORT
console.log("le prix total est: " +TOT+ "euros");
console.log("la remise est: " +REM+ "euros");
console.log("Le prix total après remise est: " +PREM+ "euros");
console.log("le prix du port est: " +PORT+ "euros")
console.log("Le prix total à payer est: " +PAP+ "euros")

//Exercice 5 (voir fichier jarditou.js)
