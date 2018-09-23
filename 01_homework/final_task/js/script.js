
window.onload = function() {
    class Person{
        constructor(name){
            this.name = name;
            this.happiness = 0;
        }
        hasCat(){
            return this.happiness += 1
        }
        hasRest(){
            return this.happiness += 1
        }
        hasMoney(){
            return this.happiness += 1
        }
    }

    const myForms = document.forms[0];
    console.log(myForms);

    myForms.onsubmit = (e) => {
        e.preventDefault();


        // const nameValue = myForms.elements.name.value;
        const hasCatValue = document.querySelector('input[cat][checked]').value;
        console.log(hasCatValue);
        // const hasCatValue = myForms.elements.name.value;
        // const hasRestValue = myForms.elements.name.value;
        // const hasMoneyValue = myForms.elements.name.value;



        //  const User = new Person(inputForms.elements.name.value);
       //  console.log(User);

    }
};














