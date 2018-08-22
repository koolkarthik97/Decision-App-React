class Person{

    constructor(name = "Anonymous", age=0){
        this.name = name;
        this.age = age;
    }

    getDescription(){
        return `${this.name } is ${this.age} years old!`
    }
}

class Traveller extends Person{

    constructor(name, age, home){
        super(name,age);
        this.home=home;
    }

    getDescription(){
        let desc = super.getDescription();

        if(!!this.home){
            desc += ` He is from ${this.home} :) `;
        }
        return desc;
    }

}


const p1 = new Person('kay',21);
const p2 = new Traveller('roy',18,'chennai');
const p3 = new Traveller('ram',18);

console.log(p1.getDescription());
console.log(p2.getDescription());
console.log(p3.getDescription());