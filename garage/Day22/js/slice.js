let colors = ["red", "green", "blue", "white", "black"];
let colors2 = colors.slice(2); //인덱스 값이 2인 요소부터 마지막까지 꺼냄
document.write(colors2 + "<br>");
colors = ["red", "green", "blue", "white", "black"];
let colors3 = colors.slice(2, 4)//두번째 인수는 끝 인덱스의 직전 인덱스
//인덱스값이 2부터 3까지 꺼내기
document.write(colors3 + "<br>");
//slice는 원본을 훼손하지 않음!!