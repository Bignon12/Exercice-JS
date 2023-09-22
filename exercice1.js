var x = document.getElementById("boutoncontrole");
x.addEventListener ("click", function () 
{
    action()
});
function action ()
{
    var a = document.getElementById("champ").value;
    if (a ==="")
    {
        alert ("Vous devez saisir un nom");
    }
    else
    {
        alert ("Vous avez saisi " + a);
    }
}