//FACTORY FUNCTION (return)
function creatCircle(radius){
    return{     
        radius,
        draw: function () {
            console.log('circle');
        }
    };
}

const circle = creatCircle(1); 
circle.draw();



//CONSTRUCTOR FUNCTION (this keyword and new operator)
function Circle(radius) {
    this.radius = radius;
    this.draw = function (){
        console.log('draw');
    }
}

const another = new Circle(1); 
another.draw();
 

/*new operator:
    + Create empty object
    + Assign this to that object
    + Return object from function*/



//ENUMERATING PROPERTY
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(10);

for (let key in circle){    //enumrate property
    if(typeof circle[key] !== 'function') //check type
        console.log(key, circle[key]);
}

const keys = Object.keys(circle); //get all the keys use 'Object.keys
console.log(keys);  

if ('radius' in circle)         //check existent of a property use in operator
    console.log ('Circle has a radius.');
    break;
;



//ABSTRACTION
function Circle(radius) {
    this.radius = radius;

    let defaultLocation = {x:0, y: 0};      

    this.getDefaultLocation = function(){
        return defaultLocation;
    };

    this.draw = function(){
        console.log('draw');
    };

    Object.defineProperty(this, 'defaultLocation', {  //defaultLocation = read only property
        get: function(){
            return defaultLocation;
        },
        set: function(value){
            if (!value.x || !value.y)
                throw new Error('invalid location.')
            defaultLocation = value;
        }
    });
}

const circle = new Circle(10);
circle.draw();
circle.defaultLocation = 1;
 






