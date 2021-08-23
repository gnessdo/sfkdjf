let inp  = document.getElementById("inp");
let eye = document.getElementById ("eye")[0];
let pass = document.getElementsByTagName("button")[1];
let sub = document.getElementsByTagName("button")[2];

function Goster (){
    if(inp.type == "password"){
        inp.type = "text";
        pass.textContent = "Hide";
    } else{
        inp.type = "password";
        pass.textContent = "Show";
    }
}

function Goster (){
    if(eye.type == "")
}


function Sifre(){
    let msj = document.getElementById("mesaj");
    msj.style.display = "inline-block";
    // msj.style.padding = "10px";
    if(inp.value.length <= 8){
        msj.innerHTML = "Sifre zeifdir";
        msj.className = "badge btn-danger";
        sub.disabled = true;
    } else{
        msj.innerHTML = "sifre gucludur";
        msj.className = "badge btn-success";
        sub.disabled = false;
    }
}
