class Registration {
    #registration_id=0;
    constructor(registration_id){
        this.#registration_id=registration_id;
    }

    static showRegistration(obj){
        console.log("Registration-Id: ", obj.#registration_id);
    }
}

class Customer extends Registration{
    #age=0;
    constructor(registration_id,name,age){  
        super(registration_id);
        this.name=name;
        this.#age=age;
    }

    static showCustomer(obj){
        this.showRegistration(obj);
        console.log("Customer-Name: ", obj.name);
        console.log("Customer-Age: ", obj.#age);
    }
}

class Car extends Customer{
    #id=0;
    constructor(registration_id,name,age,modelName,id){
        super(registration_id,name,age);
        this.modelName=modelName;
        this.#id=id;
    }

    static showCar(obj){
        this.showCustomer(obj);
        console.log("Model-Name: ", obj.modelName);
        console.log("Id: ", obj.#id);
    }   
}

const carSale=new Car(101,'Harsh',21,'Chevrolet-CX',1001);
Car.showCar(carSale);



