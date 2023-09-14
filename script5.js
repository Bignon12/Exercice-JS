var prenoms = [];

while (true) 
{
var prenom = prompt("Entrez un prénom (ou laissez le champ vide pour arrêter) :");
  if (prenom === "") 
  {
    break;
  }
  prenoms.push(prenom)
}
console.log("Nombre de prénoms saisies : " + prenoms.length);
console.log("Liste des prénoms saisies :");
for (var i = 0 ; i< prenoms.length; i++) 
{
  console.log(prenoms[i]);
}