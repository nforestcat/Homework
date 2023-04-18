let myRect = document.querySelector("#rect");
myRect.addEventListener("mouseover", mouseOver);
myRect.addEventListener("mouseout", mouseOut);
function mouseOver(){
    myRect.style.backgroundColor = "green";
    myRect.style.borderRadius = "50%";
}
function mouseOut(){
    myRect.style.backgroundColor = "";
    myRect.style.borderRadius = "";
}