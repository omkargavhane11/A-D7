
//Creating a class to detail of a person

class Person {
    constructor(firstName, lastName, birthDate, gender, birthLocation, nationality) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthLocation = birthLocation;
        this.gender = gender;
        this.birthDate = birthDate;
        this.nationality = nationality;
    }
};

let person1 = new Person("Omkar","Gavhane","03-06-1998","male","mumbai","Indian");


console.log(person1.firstName);


//Creating a class for uber ride fare 

class RideFare {
    constructor(distance_travelled) {
        this.distance_travelled = distance_travelled;
    }

    // x is the fare per kilometer
    rideFare(x){
        return this.distance_travelled * x ;
    }
};

let honda = new RideFare(50);
console.log(honda.rideFare(8));
