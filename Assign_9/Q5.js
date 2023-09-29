// Problem-5
// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]


const toLow=(inList)=>{
    const ouList = []
    for(let i=0; i<inList.length; i++){
        const newChar = inList[i].toLowerCase();
        ouList.push(newChar);
    }
    return ouList;
}





const inList = ["MA", "SA", "I", "SCH", "OOL"];
console.log(toLow(inList))