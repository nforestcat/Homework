let nums = [1, 2, 3];
let ret1 = nums.push(4, 5);
document.write("length: ", ret1, " | 배열: ", nums);
document.write("<br>");
let ret2 = nums.unshift(0);
document.write("length: ", ret2, " | 배열: ", nums);