let nums = [1, 2, 3];
let chars = ["a", "b", "c", "d"];

let numsChars = nums.concat(chars);
let charsNums = chars.concat(nums);
document.write("nums에 chars 합치면: ", numsChars, "<br> chars에 nums 합치면: ", charsNums);
