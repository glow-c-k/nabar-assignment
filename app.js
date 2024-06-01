const How=document.getElementById("How")
const box=document.getElementById("Howto")

let boxopened=false
How.addEventListener("click",decider)
function boxopener(){
    box.style.display="grid"
    boxopened=true
}
function boxcloser(){
    box.style.display="none"
    boxopened=false
}
function decider(){
    if(boxopened){
        boxcloser()
    }
    else{
        boxopener()
    }
}