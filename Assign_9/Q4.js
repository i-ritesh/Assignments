// Problem-4
// Write code to calculate the average of an array
// If there are no items in the array it should return 0
// NOTE: Create a function to find the sum of elements in an array and use that function to find out the average

const sumFun=(list)=>{
    if(list.length===0){
        return 0
    }

    let sum=0
    for(let i=0; i<list.length; i++){
        sum+=list[i];
    }

    return sum
}



const list=[3,4,6,8]
const totalSum = sumFun(list)
console.log(totalSum/list.length)


