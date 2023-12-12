
function bankObj (accountNumber, name, type,balance) {
    this.accountNumber=accountNumber;
    this.name=name;
    this.type=type;
    this.balance=balance;
    this.active=true;
}

bankObj.prototype={
    deposit:function(amt){
        if(amt>0){
            this.balance+=amt;
            console.log(`Deposited ${amt}`)
        }
        else{
            console.log("Invalid Amount")
        }
    },
    withdraw:function(withAmt){
        if(withAmt>0 && withAmt<=this.balance){
            this.balance-=withAmt;
            console.log(`Withdraw of RS ${withAmt} is Successful`)
        }
        else{
            console.log("Balance is insufficient")
        }
    },
    checkBalance:function(){
        console.log(`Account Balance: ${this.balance}`);
    },
    isActive: function() {
        return this.active;
    }
}

let account1 = new bankObj('123456789', 'Ritesh Gandalwad', 'Savings', 1000);
let account2 = new bankObj('987654321', 'Ankit Aggrawal', 'current', 500);

account1.deposit(200);
account1.withdraw(50);
account1.checkBalance();
console.log(`Account Status ${account1.isActive()}`)

account2.deposit(300);
account2.withdraw(100);
account2.checkBalance();
console.log(`Account Status ${account2.isActive()}`)

const total=(...accounts)=>{
    let totalAmt=0;
    for(let i of accounts){
        if(i.isActive()){
            totalAmt+=i.balance
        }
    }
    return totalAmt;
}

console.log(total(account1,account2))