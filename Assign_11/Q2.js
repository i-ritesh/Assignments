const proCart={
    data:[],
    name : ["Rice", "Dal", "Salt"],
    quantity : [2, 3, 1],
    price : [60, 50, 20],
    total(){
      let totalVal=0;
      for(let i=0; i<this.name.length; i++){
        this.data.push({names:this.name[i],quantities:this.quantity[i],prices:this.price[i]})
        totalVal += this.quantity[i]*this.price[i]
      }
      return totalVal
    }
  }
  let ans = proCart.total()
  console.log(ans)