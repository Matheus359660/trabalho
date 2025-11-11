const TV = document.getElementById("TV");

TV.addEventListener("mouseover",ligar);
TV.addEventListener("mouseout",desligar);

function ligar(){
    TV.src = "on.png";
    document.body.style.background = "#000000ff"
}
function desligar(){
    TV.src = "off.png";
    document.body.style.background = "#111111ff"
   
}

