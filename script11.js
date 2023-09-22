var x= document.getElementById("button1");
x.addEventListener("click", function() {
    console.log("event");
    verify();
});

var a = parseInt(Math.random()*100);
console.log(a);

function verify()
{ 
    var b = parseInt(document.getElementById("textbox1").value);
    console.log(b);
    if (isNaN (b))
    {
        document.getElementById("label2").innerHTML= "Entrez un nombre valide";
    }
    else
        if (b<a)
        {
            document.getElementById("label2").innerHTML= "Trop petit, réessayez";
        }
        else
            if (b>a)
            {
                document.getElementById("label2").innerHTML= "Trop grand, réessayez encore";
            }
            else
            {
                document.getElementById("label2").innerHTML= "Félicitation, vous avez deviné le mot magique";
            }
}



