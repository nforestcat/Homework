let nums = [1, 2, 3];
let chars = ["a", "b", "c", "d"];

let string1 = nums.join();
document.write("구분자 없이: ", string1);
document.write("<br>");
let string2 = chars.join('/');
document.write("'/' 구분자 지정: ", string2);