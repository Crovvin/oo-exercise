class Vehicle {constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){return "Beep"}
    toString(){return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`}
}

class Car extends Vehicle {constructor(make, model, year){
    super(make, model, year);
    this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle{constructor(make, model, year){
    super(make, model, year);
    this.numWheels = 2;
    }
    revEngine(){return "VROOM!!!"}
}

class Garage {constructor(capacity){
    this.capacity = capacity;
    this.vehicles = [];
    }
    add(addVehicle){
        if(this.capacity <= this.vehicles.length){
            return "Sorry, we're full"
        }
        if(!(addVehicle instanceof Vehicle)){
            return "Only behicles are allowed in here!"
        }
        this.vehicles.push(addVehicle);
        return "Added Vehicle"
    }
}
