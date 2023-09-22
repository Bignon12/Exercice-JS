//Exercice DOM

var valeursaisi= [];

while (true)
{
    var element= parseInt(window.prompt("Entrez les valeurs, 0 pour arrêter"));
    if (isNaN (element))
    {
        alert ("Entrez un nombre valide");
    }
    else
    {
        if (element ===0)
        {
            break;
        }
        else
        {
            valeursaisi.push(element);
        }
    }
}

var nbvaleurs = valeursaisi.length;
var somme = 0;
for (i=0; i<nbvaleurs; i++)
{
    somme +=valeursaisi[i];
    var moyenne = somme/nbvaleurs;
}
alert("Le nombre de valeurs saisies est: " +nbvaleurs);
alert ("La somme des valeurs saisies est: " +somme);
alert ("La moyenne des valeurs saisies est: " +moyenne);


