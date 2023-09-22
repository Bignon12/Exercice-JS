
var soci = document.forms["myform"] ["soci"]
var ppc = document.forms["myform"] ["ppc"]
var cp = document.forms["myform"] ["codpost"]
var vil = document.forms["myform"] ["vil"]
var email = document.forms["myform"] ["email"]
var choix = document.forms ["myform"]["choix"]
var regex1= /^[A-Za-z-]+$/;
var regex2= /^[0-9]{5,}$/;
var regex3= /^[a-z0-9.-]+@[a-z0-9.-]{2,}.[a-z]{2,4}$/;
var M=document.getElementById("bouton");
choix.addEventListener ("change", function()
    {
        // alert("f")
        if (choix.value !== "")
        {
            var lab8 = document.getElementById("label8");
            lab8.textContent = choix.value;
            // alert(lab8);
        }
        else
        {
            document.getElementById("choix2").innerHTML = ("veuillez faire votre choix")
        }
    })
M.addEventListener("click", function()
{
    if (regex1.test(soci.value)==false)
    {
        document.getElementById("soci2").innerHTML=("Ce champ doit comporter au moins un caractère")
        document.getElementById("soci2").style.color="red"   
    }
    else {
        document.getElementById("soci2").innerHTML=("")  
    }
    if (regex1.test(ppc.value)==false)
    {
        document.getElementById("ppc2").innerHTML=("Ce champ doit comporter au moins un caractère")
        document.getElementById("ppc2").style.color="red"   
    }
    else {
        document.getElementById("ppc2").innerHTML=("")  
    }
    if (regex1.test(vil.value)== false)
    {
        document.getElementById("vil2").innerHTML=("Ce champ doit comporter au moins un caractère")
        document.getElementById("vil2").style.color="red"   
    }
    else {
        document.getElementById("vil2").innerHTML=("")  
    }
   
    if (regex2.test(cp.value)== false)
    {
        document.getElementById("codpost2").innerHTML=("Ce champ doit comporter 5 caractéres numériques")
        document.getElementById("codpost2").style.color="red"   
    }
    else {
        document.getElementById("codpost2").innerHTML=("")  
    }
    if (regex3.test(email.value)== false)
    {
        document.getElementById("email2").innerHTML=("Ce champ doit comporter une adresse mail valide")
        document.getElementById("email2").style.color="red"   
    }
    else {
        document.getElementById("email2").innerHTML=("")  
    }
    
    // choix.addEventListener ("change", function()
    // {
    //     alert("f")
    //     if (choix.value !== "")
    //     {
    //         var lab8 = document.getElementById("label8");
    //         lab8.textContent = choix.value;
    //         alert(lab8);
    //     }
    //     // else
    //     // {
    //     //     document.getElementById("choix2").innerHTML = ("veuillez faire votre choix")
    //     // }
    // })
})
// var soci = document.forms["myform"]["soci"];
// var ppc = document.forms["myform"]["ppc"];
// var cp = document.forms["myform"]["codpost"];
// var vil = document.forms["myform"]["vil"];
// var email = document.forms["myform"]["email"];
// var choix = document.forms["myform"]["choix"];
// var regex1 = /^[A-Za-z-]+$/;
// var regex2 = /^[0-9]{5,}$/;
// var regex3 = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,4}$/;
// var M = document.getElementById("bouton");

// M.addEventListener("click", function() {
//     if (!regex1.test(soci.value)) {
//         document.getElementById("soci2").innerHTML = "Ce champ doit comporter au moins un caractère";
//         document.getElementById("soci2").style.color = "red";
//     } else {
//         document.getElementById("soci2").innerHTML = "";
//     }

//     if (!regex1.test(ppc.value)) {
//         document.getElementById("ppc2").innerHTML = "Ce champ doit comporter au moins un caractère";
//         document.getElementById("ppc2").style.color = "red";
//     } else {
//         document.getElementById("ppc2").innerHTML = "";
//     }

//     if (!regex1.test(vil.value)) {
//         document.getElementById("vil2").innerHTML = "Ce champ doit comporter au moins un caractère";
//         document.getElementById("vil2").style.color = "red";
//     } else {
//         document.getElementById("vil2").innerHTML = "";
//     }

//     if (!regex2.test(cp.value)) {
//         document.getElementById("codpost2").innerHTML = "Ce champ doit comporter 5 caractères numériques";
//         document.getElementById("codpost2").style.color = "red";
//     } else {
//         document.getElementById("codpost2").innerHTML = "";
//     }

//     if (!regex3.test(email.value)) {
//         document.getElementById("email2").innerHTML = "Ce champ doit comporter une adresse mail valide";
//         document.getElementById("email2").style.color = "red";
//     } else {
//         document.getElementById("email2").innerHTML = "";
//     }

//     if (choix.value !== "") {
//         var lab8 = document.getElementById("label8");
//         lab8.textContent = choix.value; // Correction ici pour attribuer la valeur à lab8
//     }
// });
