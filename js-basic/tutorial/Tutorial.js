// Comment like # in python
// CAMEL NOTATION: firstName - naming rule
let name = 'Mosh';
console.log(name);

// ARRAY
let selectedColors = ['red','blue'];
selectedColors[2] = 1; // elements of array can be different type

//FUNCTION
    //Performing a task
function great(name, lastName) {       // name - parameter
    console.log('Hello' + name + '' + lastName);
}

great('John','Smith'); //John = arguement supply to parameter


    //Calculating value
function square(number) {
    return number * number;
}

let number = square(2)
console.log(number);
console.log(square(2));

// FUNCTION THAT ADD ELEMENT TO THE END OF ARRAY AND REMOVE 1ST ITEM
function nextInLine(arr,item){
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After: " + JSON.stringify(testArr));

   

//SWITCH CONDITION - ELSE IF ALTERNATIVE
function switchIn(val){
    var answer = "";
    switch(val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default: //similar to else
            answer= "choose again";
            break;
    }    
    return answer;
}

    //multiple input give out one output
function switchIn(val){
    var answer = "";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "high";
            break;
    }
    return answer
};

// ACCESSING NESTED OBJECT
var myStorage = {
    "car": {
        "inside": {
            "glove box": "map",
            "passenger seat": "crumb"
        },
        "outside": {
            "trunk": "jack"
        }   
    }
};

var gloveBoxContent = myStorage.car.inside["glove box"];

console.log(gloveBoxContent)


// ACCESSING NESTED ARRAY
var myPlant = [
    {
        type: "flower",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "tree",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlant[1].list[1];
console.log(secondTree);

//EXERCISE: RECORD COLLECTION
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "track": [
            "Let It Rock",
            "You Give Love A Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": " RObert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};


// keep a copy of the collection for tests
var collectionCopu = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value){
    if (vlaue ===""){
        delete collection[id][prop];
    } else if (prop === "tracks"){
        collection[id][prop] = collection[id][prop] || []
        collection[id][prop].push(value)
    } else {
        collection[id][prop] = value;
    } 
    return collection;
}

console.log(updateRecords(1245, "tracks", "Kill Me"))


//WHILE LOOP
var myArray = [];
var i = 10;

while (i < 5){
    myArray.push(i);
    i++;
}


    //DO ... WHILE LOOP: do at least 1 iteration before checking condition
do {
    myArray.push(i);
    i++;
}   while(i < 5)



//FOR LOOP
var ourArray = []
for (var i = 0; i < 5; i++){   //for(initialisation; condition; action at end of each iteration(loop))
    ourArray.push(i);
}

    //NESTED FOR LOOP
function multiplyAll(arr){
    var product = 1;

    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr[i].length; j++){
            product *=arr[i][j];
        }
    }
    return product;
}
var product = multiplyAll([[1,2], [3,4], [5,6,7]]);
console.log(product);



// EXERCISE: PROFILE CHECK UP
var contact = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "012345678",
        "likes": ["pizza", "coding", "brownie points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "021345679",
        "likes": ["Hogwarts", "magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "045609348",
        "likes": ["intriguing cases", "violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "009384857",
        "likes": ["JavaScript", "gaming", "foxes"]
    }
];

function lookUpProfile(name,prop){
    for (var i = 0; i < contact.length; i++){
        if (contact[i].firstName === name){
            return contact[i][prop] || "No such property";
        }
    }
    return "No such contact";
}

var data = lookUpProfile("Emmy", "sport");
console.log(data);



// ARROW FUNCTION WITH HIGHER ORDER
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntergers = arr.filter(num => Number.isInterger(num) && num >0).map(x => x * x);
    return squaredIntegers
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);



//REST OPERATOR (...)
const sum = (function(){
    return function sum(x,y,z) {
        const args = [x, y, z];
        return args.reduce ((a,b) => a + b, 0); 
    };
})();

console.log(sum(1, 2, 3));

    //OR
    return function sum(...args) { 
        return args.reduce((a,b) => a + b, 0)
    };
console.log(sum(1,2,3,4)) //spread operator allow any amount of arguements



    //SPREAD OPERATOR (...)
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function(){
    arr2 = [...arr1];
    arr1[0] = 'potato'
})();
console.log(arr2);




//DESTRUCTION ASSIGNMENT
const FORECAST = {
    today: {min: 72, max: 83},
    tomorrow: {min: 73.4, max: 84.6}
};

function getTomorrowTemp(tmrwForecast){
    "use strict";
    const{ tomorrow: {max: maxOfTomorrow}} = tmrwForecast;
        //destructive assignment can be use for nested object
    return maxOfTomorrow;
}

console.log(getTomorrowTemp(FORECAST));



    //DESTRUCTURING ARRAY
const [z, x, , y] = [1, 2, 3 ,4 ,5 ,6]; //use , to skip element
console.log(z, x, y) //destructuring array assign variable in order

let a = 8, b= 6;
(() => {
    'use strict';
    [a, b] = [b, a] //use destructuring to switch place
})();
console.log(a);
console.log(b);


    // DESTRUCTURING ASSIGNMENT WITH REST OPERATOR TO REASSIGN ARRAY ELEMENTS
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list){
    
    const[,, ...arrg] = list;

    return arrg;
}
const arr = removeFirstTwo(source);
console.log(arrg);
console.log(source);

    //DESTRUCTURING ASSIGNMENT AS PARAMETER FOR A FUNCTION
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function(){

    return function half({max, min}) {   //{max, min} destructure
        return (max + min) / 2.0; 
    };
})();

    //OR


//  return function half(stat) {
//      return (stats.max + stats.min) / 2.0; 

console.log(stats);
console.log(half(stats));



//TEMPLATE LITERAL
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    };
    
    return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure)

console.log(resultDisplayArray);



//CONCISE OBJECT LITERAL USING SIMPLE FIELDS
const createPerson = (name, age, gender) => {
    return{
        name: name,
        age: age,
        gender: gender
    };
};
console.log(createPerson("Zodiac Hasbro", 56, "male"));

    //SHORTEN
    const createPerson = (name, age, gender) => ({name, age, gender});
    console.log(createPerson("Zodiac Hasbro", 56, "male"))


    
//CONCISE DECLARATIVE FUNCTIONS
const bicycle={
    gear: 2,
    setGear: function(newGear) {  //function with in object
//SHORTEN setGear(newGear) {     
        "use strict"
        this.gear = newGear;
    }
};
gicycle.setGear(3)
console.log(bicycle.gear);



//CLASS SYNTAX TO DEFINE CONSTRUCTOR FUNCTION
class SpaceShuttle {            //class syntax replaces constructor function creation
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
}
var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet) 


function makeClass() {
    class Vegetable {
        constructor(name){
            this.name = name;
        }
    }
    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); 


    //GETTER SETTER TO CONTROL ACCESS TO AN OBJECT
 function makeClass(){
     class Thermostat {
         constructor(temp){
             this._temp = 5/9 * (temp -32);
         }
         get temperature(){
             return this._temp
         }
         set temperature(updatedTemp){
             this._temp = updatedTemp;
         }
     }
     return Thermostat;
 }
 
 const Thermostat = makeClass();      //"makeClass" function return "Thermostat" object
 const thermos = new Thermostat(76);  //let thermos = Thermostat class, '76' go into constructor(temp)
 let temp = thermos.temperature;      //use getter return 'this._temp'
 thermos.temperature = 26;            //set 'updatedTemp' with 26
 temp = thermos.temperature;


 //IMPORT AND EXPORT BETWEEN FILES
    //IMPORT
import { capitalizeString } from "./string_function"  //./ current directory
const cap = capitalizeString("hello!");

console.log(cap);

    //EXPORT (ANOTHER FILES NAME 'STRING_FUNCTION)
export const capitalizeString = str => str.toUpperCase()

    //EXPORT EXAMPLE
const capitalizeString = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);  //capitalize first letter of a string
}

export { capitalizeString };

    //IMPORT EVERYTHING WITH *
import * as capitalizeString from "capitalize_String";  
//import * as (object name) from "file_name";


    //EXPORT DEFAULT/ FALLBACK EXPORT
export default function substract(x,y) {return x - y};

    //IMPORT DEFAULT EXPORT
import substract from "math_function"  // import {object} = normal, import object  = default



