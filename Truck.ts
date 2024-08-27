// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

class Truck extends Vehicle implements AbleToTow{ 
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // Constructor for the Car class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity:number
  ) {
    // Call the constructor of the parent class, Vehicle
    super();

    // Initialize properties of the Car class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity= towingCapacity;
    // Check if the wheels array has 4 elements
    // If not, create 4 new Wheel objects
    // Otherwise, use the provided wheels array
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
      
    }
   
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    // Call the printDetails method of the parent class, Vehicle
    super.printDetails();

    // Print details of the Car class
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);

    // Print details of the wheels
    console.log(
      `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
    );
    console.log(
      `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
    );
    console.log(
      `Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`
    );
    console.log(
      `Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`
    );
  }



  
  tow(vehicle: Truck | Motorbike | Car): void {


    interface Vehicle {
      make?: string;
      model?: string;
      weight: number;
    }
    
    interface AbleToTow {
      towingCapacity: number;
      tow(vehicle: Truck | Motorbike | Car): void;
    }
    
    class Truck implements Vehicle, AbleToTow {
      make?: string;
      model?: string;
      weight: number;
      towingCapacity: number;
    
      constructor(make: string, model: string, weight: number, towingCapacity: number) {
        this.make = make;
        this.model = model;
        this.weight = weight;
        this.towingCapacity = towingCapacity;
      }
    
      tow(vehicle: Truck | Motorbike | Car): void {
        const make = vehicle.make ? `Make: ${vehicle.make}` : 'Make: Unknown';
        const model = vehicle.model ? `Model: ${vehicle.model}` : 'Model: Unknown';
        const weight = vehicle.weight;
    
        console.log(`${make}, ${model}`);
    
        if (weight <= this.towingCapacity) {
          console.log('The vehicle is being towed.');
        } else {
          console.log('The vehicle is too heavy to be towed.');
        }
      }
    }
    
    class Motorbike implements Vehicle {
      make?: string;
      model?: string;
      weight: number;
    
      constructor(make: string, model: string, weight: number) {
        this.make = make;
        this.model = model;
        this.weight = weight;
      }
    }
    
    class Car implements Vehicle {
      make?: string;
      model?: string;
      weight: number;
    
      constructor(make: string, model: string, weight: number) {
        this.make = make;
        this.model = model;
        this.weight = weight;
      }
    }
    
    // Example usage
    const truck = new Truck('Ford', 'F-150', 4000, 10000);
    const car = new Car('Toyota', 'Camry', 3000);
    const bike = new Motorbike('Harley', 'Sportster', 500);
    
    truck.tow(car);  // Output: Make: Toyota, Model: Camry The vehicle is being towed.
    truck.tow(bike); // Output: Make: Harley, Model: Sportster The vehicle is being towed.


    // TODO: Get the make an model of the vehicle if it exists
    // TODO: If it is, log that the vehicle is being towed
    // : If it is not, log that the vehicle is too heavy to be towed
  }
  
  
}

// Export the Truck class as the default export
export default Truck;




