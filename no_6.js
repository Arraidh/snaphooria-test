const arrayOfNum = [1, 5, 3, 7, 2];
const arrayOfNum2 = [3, 1, 5, 2, 4];

const getHighestNumber = (arr) => {
  return Math.max(...arr);
};

console.log("Sampel angka tertinggi 1 ==> " + getHighestNumber(arrayOfNum));
console.log("Sampel angka  tertinggi 2 ==> " + getHighestNumber(arrayOfNum2));

const sortNumber = (arr) => {
  return arr.sort(function (a, b) {
    return a - b;
  });
};
console.log("Sampel angka terurut 1 ==> " + sortNumber(arrayOfNum));
console.log("Sampel angka  terurut 2 ==> " + sortNumber(arrayOfNum2));
