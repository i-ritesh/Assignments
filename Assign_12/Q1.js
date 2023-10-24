let arr = [10, 24, 56, 72, -10, -88, 100, 564];
const sum = arr.reduce((acc, curr, index) => {
    // console.log(sum)
  if (index % 2 !==0){
    return acc+curr;
  }
  return acc;
}, 0);
// console.log(sum)
// console.log(arr)
const count = arr.filter((element, index) => index%2!==0)
// console.log(arr)
// console.log(count.length)
const avg = sum/count.length;

console.log(avg);
