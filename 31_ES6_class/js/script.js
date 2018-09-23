class User {
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }
    sayHi() {
        return 'Hello ' + this.name;
    }
}

class Female extends User{
    sayHi() {
        return 'Hello ' + this.name + '! You are sing up';
    }
}

const Men = new User('someone', 'ololo@yoox.com', 'qwerty');
console.log(Men);
console.log(Men.sayHi());

const Jasmin = new Female('Jasmin', 'kryakina@gmail.com', 'POc3Df3');
console.log(Jasmin);
console.log(Jasmin.sayHi());