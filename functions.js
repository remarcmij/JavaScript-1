// first assignment
function random(x, y, z) {
    return x + y + z;
}

console.log(random(1, 2, 3));
// end first assignment

// second assignment
function colorCar(color) {
    console.log("a " + color + " car");
}

colorCar("red");
// end second assignment

// third assignment
const arr = ["Dog", "Cat", "Hamster"];

function third(arr) {
    console.log(arr);
}

third(arr);
// end third assignment

//fourth assignment
function vehicleType(color, code) {
    if (code === 1) {
        code = "car";
    } else {
        code = "motorbike"
    }
    console.log("a " + color, code);
}
vehicleType("blue", 2)
// end fourth assignment

// fifth assignment
let confirm = 3 === 3 ? console.log("true") : console.log("false");
// end fifth assignment

// sixth assignment
function vehicle(color, age, code) {
    if (age === 0) {
        age = "okay";
    } else if (age === 1) {
        age = "used";
    } else {
        age = "new";
    };
    switch (code) {
        case 1:
            code = listOfVehicles[1]
            break;
        case 2:
            code = "race car";
            break;
        case 3:
            code = "tractor";
            break;
        case 4:
            code = "boat";
            break;
        case 5:
            code = "car";
            break;
    }
    console.log("a " + color, age, code);
}

vehicle("blue", 1, 5);
// end sixth assignment

// seventh assignment
const listOfVehicles = ["motorbike", "caravan", "bike", "car", "boat"];
// end seventh assignment

// eighth assignment
console.log(listOfVehicles[3]);
// end eighth assignment

// ninth assignment
vehicle("green", 3, 1);
// end ninth assignment

// tenth assignment
for (i = 0; 1 > i; i++) {
    let slogan = "Amazing Joe's Garage, we service " + listOfVehicles;
    slogan = slogan.replace(/,/g, ", ");
    console.log(slogan);
};
// end tenth assignment

// eleventh assignment
listOfVehicles.push("Jet");
console.log(listOfVehicles);
// end eleventh assignment

// twelfth assignment
let emptyObject = [];
// end twelfth assignment

// thirteenth assignment
const listOfTeachers = ["Dine", "Unmesh", "Jim"];
console.log(listOfTeachers);
// end thirteenth assignment

// fourteenth assignment
listOfTeachers.splice(0, 1, "Dine taught HTML&CSS");
listOfTeachers.splice(1, 1, "Unmesh taught Git");
listOfTeachers.splice(2, 1, "Jim Teaches JavaScript");
console.log(listOfTeachers);
// end fourteenth assignment

// fifteenth assignment
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(x == y);
console.log(x === y);
console.log(z == y);
console.log(z == x);
// end fifteenth assignment

// sixteenth assignment

let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

console.log(o1);
console.log(o2);
console.log(o3);

o2 = { foo: "Kenan" };
console.log(o3);
console.log("It didn't change the value of o3");

o1 = { foo: "HYF" };
console.log(o3);
console.log("It also didn't change the value of o3");

o2 = o3;

console.log(o3);
console.log("No it does not");
// end sixteenth assignment

// seventeenth assignment
let bar = 42;
console.log(typeof typeof bar);

console.log("It has returned a string because the first typeOf property returned the word 'number' and the second typeOf was assigned to the word 'number'")
