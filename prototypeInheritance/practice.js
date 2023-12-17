// let obj={
//     name:"ritesh",
//     role:"Senior SE",
//     salary:2000
// }

// // console.log(obj)
// let obj2 = Object.create(obj)
// console.log(obj2)

// function Person(name,age){
//     this.name=name;
//     this.age=age
// }
// let person1=new Person("Ritesh",20)
// console.log(person1)

// let a = {
//     name:"Ritesh"
// }

// let b = Object.create(a)
// b.age=12
// console.log(a.__proto__)

// console.log(b.hasOwnProperty('age'))
// console.log(b.__proto__.__proto__)

// let arr=[2,3,4]
// console.log(arr)

function myArr(...a){
    console.log(a)
}
myArr(1,2,4,5,3,3,4,"e")