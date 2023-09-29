// Problem-3
// Write a function isOdd which returns a boolean value based on the number is odd or not
// Use this function to print the odd numbers from 0 to a given limit(included)

// const isOdd=(num)=>{
//     return num%!2==0;
// }

// const print=(limit)=>{
//     for (let i=0; i<=limit; i++) {
//         if (isOdd(i)) {
//           console.log(i);
//         }
//     }
// }



const isOdd=(number)=> {
    return number % 2 !== 0;
  }
  

const print=(limit)=>{
for (let i = 0; i <= limit; i++) {
    if (isOdd(i)) {
    console.log(i);
    }
}
}
  

const limit = 10;

print(limit);
  
  