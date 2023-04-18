let cover = document.getElementById("cover");
cover.addEventListener("mouseover", changePic);
cover.addEventListener("mouseout", originPic);
function changePic() {
    cover.src = "images/easys-2.jpg";
}
function originPic() {
    cover.src = "images/easys-1.jpg";
}