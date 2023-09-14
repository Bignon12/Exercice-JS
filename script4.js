var nb1 = parseInt (prompt ("Saisissez un nombre"));
alert (nb1);
var nb2 = parseInt(prompt ("saisissez un deuxième nombre"));
alert (nb2);
var op = prompt ("choisissez un opérateur (+, -, *, /)");
alert (op);
var r;
switch (op)
{
    case "+":
        r= nb1+nb2;
    break;
    case "-":
        r= nb1-nb2;
    break;
    case "*":
        r= nb1*nb2;
    break;
    case "/":
        if (op== "/" & nb2==0)
        {
            alert ("Erreur, division par 0");
        }
        else
        {
            r=nb1/nb2;
        }
        
    break;      
}
alert ("Le résultat est:" +r);