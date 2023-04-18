let add = function(arr) {
    return arr.reduce((a, b) => a + b, 0);
};
let aryData=[5, 2, 8, 9, 3, 6, 4, 3, 2, 7];
let result = 0;
result = add(aryData);
document.write(result);
document.write(aryData.sort());