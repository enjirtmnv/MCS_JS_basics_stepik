class Customer {
    constructor(name){
        this.name = name;
    }
    buy() {
        console.log(this.name + ', Kupleno!');
    }
}

class ChildCustomer extends Customer{
    getPresent(){
        console.log(this.name + ', Sharik v podarok!');
    }
}

const Adam = new ChildCustomer('Adam');

console.log(Adam.buy());
console.log(Adam.getPresent());