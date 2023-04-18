function showdate(){
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let date= today.getDate();
    let day = today.getDay();
    let aryDay = ["일", "월", "화", "수", "목", "금", "토"];
    document.getElementById("show").innerHTML="오늘은 " + year + "년" + month + "월" + date +"일" + aryDay[day]+ "요일 입니다";
}