function addToZero(value){
    if (value < 10){
        value = "0"+value;
    }
    return value;
}
function displayTime(){
    let objDate = new Date();
    let hours = addToZero(objDate.getHours());
    let minuits = addToZero(objDate.getMinutes());
    let seconds = addToZero(objDate.getSeconds());

    let time = hours + " : " + minuits + " : " + seconds;
    document.getElementById('clock').innerHTML = time;
}

setInterval(function(){
    displayTime();
}, 500);
displayTime();