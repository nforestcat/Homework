let numbers = [1, 2, 3, 4, 5];
let newNumbers = numbers.splice(2);
document.write("반환된 배열: " + newNumbers + "<br>");
document.write("변경된 배열: " + numbers + "<br>");
let study = ["html", "css", "web", "jquery"];
let newStudy = study.splice(2,1); //앞의 인수가 인덱스값(0부터)
document.write("반환된 배열: " + newStudy + "<br>");
document.write("변경된 배열: " + study + "<br>");
let newStudy2 = study.splice(2,1, "js"); //3번째는 삭제된 자리에 추가
document.write("반환된 배열: " + newStudy2 + "<br>");
document.write("변경된 배열: " + study);