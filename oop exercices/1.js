/*
    Write a JavaScript program to create a class called "Person" with properties for name, age 
    and country. Include a method to display the person's details. Create two instances of
    the 'Person' class and display their details.
*/

class Person{
    static counter = 0;
    constructor(name,age,country){
        this.name=name;
        this.age=age;
        this.country=country;
        
        Person.counter++;
        this.number = Person.counter;
    }

    displayPerson(){
        console.log(`N° : ${this.number}\n Name : ${this.name}\nAge : ${this.age}\nCountry : ${this.country}\n##################`);
    }
}

const person1 = new Person("Ahmed",20,"CASABLANCA");
const person2 = new Person("Yasser",22,"Mosco");

person1.displayPerson();
person2.displayPerson();