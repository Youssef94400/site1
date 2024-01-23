function login(){
    var log=prompt("Donner votre nom d'utilisateur :");
    var pass=prompt("Entrez votre mot de passe :");
    if (log == "admin" && pass == "admin"){
        document.write("Bienvenue : " + log);
    }
    else{
        alert("Accès refusé.");
    }
}

function login2(){
    window.location.href="Id.html";
    
}

function valid(){
    var log= user.value;
    var pass= mdp.value;
    if (log == "admin" && pass == "admin"){
        window.location.href="connection2.html";
    }
    else{
        window.location.href="refuse.html";
    }
}

function affichagetab(){
    document.write('<table border=2px width=30%>');
    for(var i = 0; i<=10; i++){
        document.write('<tr><td>***</td> <td>***</td> <td>***</td> </tr>');
    }
    document.write('</table>');
}
function affichagetab2(){
    var count = prompt("entrez le nombre de ligne pour votre tableau")
   document.write('<table border=2px width=30%>');
    for(var i = 1; i<=count; i++){
        document.write("<tr><td>"+i+"</td> <td>***</td> <td>***</td> </tr>");
    }
    document.write('</table>');
}
function cdc(){
    var chaine = prompt("donner un mot");
    document.write(chaine.toUpperCase()+"<br>");
    document.write(chaine.toLowerCase()+"<br>");
    document.write("la chaine contient " + chaine.length + " caractères" + "<br>");
    document.write("la première lettre est " + chaine.substr(0,1) + "<br>");
    document.write("la derniere lettre est " + chaine.substr(chaine.length-1,1) + "<br>");
}
function login3(){
    var i = 0;
    do {
        var id= prompt ("Entrez votre nom d'utilisateur");
        var mdp= prompt ("Entrez votre mot de passe");
        if(id=="admin" && mdp=="admin"){
        
            document.write("Bienvenue "+id);
            break;
        } 
        else
        alert("Accès refusé !");
    i=i+1;
    }while (i<3);

    if(i==3)
    alert("Vous avez tapé trop de fois votre mot de passe");
    
}