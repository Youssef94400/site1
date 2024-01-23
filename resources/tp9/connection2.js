function login2(){
    window.location.href="Id.html";
    
}

function valid(){
    var log= user.value;
    var pass= mdp.value;
    if (log == "admin" && pass == "admin"){
        window.location.href="valider.html";
    }
    else{
        window.location.href="refuser.html";
    }
}