const arr =[3,4,5,6,7];
const resultArr=[]
arr.forEach((ele)=>{
    if(ele%2!==0){
        resultArr.push(ele)
    }
})

// console.log(resultArr)

console.log(resultArr.join(" - "))