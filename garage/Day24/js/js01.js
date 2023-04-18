//let cup = document.getElementById("cup");
let cup = document.querySelector("#cup");

cup.addEventListener("click", changePic);
//cup.onclick = changePic();

function changePic(){
    cup.src= "images/cup-2.png";
    alert("이벤트 유형: " + event.type + ", 이벤트 발생 위치: " + event.pageX + "," + event.pageY)
}