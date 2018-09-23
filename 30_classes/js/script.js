let Users = {
    hasAccesToProfile: true,
    approved: true,
    sayHi: function () { return 'Privet! Ty zaregestrirovan'}
};


function User(name, email, password) {
    //конструктор - определяет по каким правилам будет создаваться новый пользователь
    this.name = name;
    this.email = email;
    this.password = password;
    this.__proto__ =  Users;
}


const Fedya = new User('John', 'morkovkin@mail.ru', 'qwerty');
console.log(Fedya);
console.log(Fedya.sayHi());



function FUser(name, email, password) {
    //конструктор - определяет по каким правилам будет создаваться новый пользователь
    this.name = name;
    this.email = email;
    this.password = password;
    this.__proto__ =  Users;
    this.sayHi = function () { return 'Privet, ' + this.name + '! Ty zaregestrirovana'}
}

const Alla = new FUser('Alla', 'horoshaya@gmail.com', 'AllaH85');
console.log(Alla);
console.log(Alla.sayHi());