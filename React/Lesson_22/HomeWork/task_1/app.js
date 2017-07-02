class Person {
    constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
        this.firstName = firstName,
            this.lastName = lastName,
            this.age = age,
            this.gender = gender
    }
    
    fullName (){
      let a = this.firstName + ' ' + this.lastName;
      return a;
    }
    sayHi() {
        return 'Hello, my name is' + ' ' + this.fullName();
    }
}

const person = new Person();
console.log(person.sayHi());