// Problem-6
// Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST
// NOTE: Use multiple functions to achieve the result, NOT one single code block

const fisrtStr=(str)=>{
    return str.toLowerCase();
}

const remSwap=(str)=>{
    let smCase = fisrtStr(str[0])
    console.log(typeof(smCase))
    for(let i=1; i<str.length; i++){
        smCase+=str[i].toUpperCase()
    }
    return smCase
}



const str="Test"

console.log(remSwap(str))