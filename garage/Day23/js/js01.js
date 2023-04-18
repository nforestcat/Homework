let num = prompt("숫자를 입력해 주세요");
if (num < 10){
    alert("10");
} else if( num > 100){
    alert("100");
} else{
    alert(num);
}
num = Math.min(100, Math.max(10, num));
alert(value);