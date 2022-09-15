

class User {
    constructor(fName, lName, age){
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    }

    introduce(){
        console.log(`Hello My name is ${this.firstName} ${this.lastName}`)
    }
    howOld(){
        console.log(` ${this.firstName} ${this.lastName} is ${this.age} years old`)
    }
};

const user1 = new User ("Lennard","John", 32)
console.log(user1)
console.log(window)

user1.introduce()
user1.howOld()

class Vehicle {
    constructor(model, yearOfMan,Manufacturer,Colour){
        this.model = model;
        this.yearOfMan = yearOfMan;
        this.Manufacturer =Manufacturer;
        this.Colour = Colour;
    }

    displayColour(){
        console.log(`Here are a the colours ${this.Colour}`)
    }
}

let vehicleOne = new Vehicle ('X3',2010,"BMW","White")

vehicleOne.displayColour()
