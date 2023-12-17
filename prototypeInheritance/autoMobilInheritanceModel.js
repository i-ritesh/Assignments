/* USING OBJECT.CREATE() METHOD */

let autoMobile = {
    start: function(){
        console.log("Starting Engine for a Drive")
    },
    stop: function(){
        console.log("Stop Enigine")
    }
}
// console.log(autoMobile.start())

let newCar=Object.create(autoMobile)
// console.log(newCar.start())
newCar.color="black"
newCar.type="Auto"
// console.log(newCar.hasOwnProperty("color"))
// console.log(newCar.start())
newCar.start()
newCar.stop()
console.log(newCar.color)
console.log(newCar.type)


/* USING CONSTRUCTOR FUNCTION */

function newAutoMobile(){

}

newAutoMobile.prototype={
    start:function () {
        console.log("Engine started For A Drive");
    },
    stop:function(){
        console.log("Enginee Stopped")
    }
}

function buildFourWheelerCar(){
    newAutoMobile.call(this)
    this.wheels=4
}

buildFourWheelerCar.prototype=Object.create(newAutoMobile.prototype)
buildFourWheelerCar.prototype.constructor=buildFourWheelerCar

buildFourWheelerCar.prototype.drive = function () {
    console.log("Driving The Car");
};

let myCar = new buildFourWheelerCar()

myCar.start()
myCar.stop()
myCar.drive()