// RETURN IN FUNCTIONS
//They can be  captured and stored for future use
//Returns only one value
//A function can have multiple return statements
//Return statement ends function execution

//The last big topic
//Reusable procedures
//allows us to write reusable, modular code
//we define a "chunk" of code that we can then execute at a later point
//we use them ALL THE TIME

//2 STEP PROCESS (DEFINE AND RUN)
//FUNCTION DECLARATION: function funcName(){
    //do something
//}
//Another way to declare functions is function expressions
//const square = function (num){
 //   return num*num ;
//}
//square(7);
//parameter stores value
//Defining a function
function grumpus(){
    console.log('ugh...you again...');
    console.log('for the last time...');
    console.log('LEAVE ME ALONE!!!');
}
grumpus();//you must call a function
//Arguments
//Eg INPUTS
//THEY BEHAVE THE SAME WAY EVERY TIME
//no input
function greet(){
    console.log('hi');
};
greet();
//ARGUMENTS THAT ACCEPT INPUT
function greet(name){
    console.log(`Hi,${name}`);
};
greet('NOELINE');
//multiply two numbers
function multiply(x,y){
    console.log(x*y);
}
multiply(2,3);
//finding avarage of numbers using function
//function avg(arr){
   // let total =0
    //console.log();
//}
function division( y,z){
    console.log(y/z);
}
division(10,2);
//function add
function addition(a,b){
    console.log(a+b);
}
addition(6,12);
//square a number
function square(c){
    console.log(c**2);
}
square(4);

function avg(arr){
    let sum = 0;
    for (let r of arr){
        sum += r;
    }
    const average = sum / arr.length;
    console.log(average);
};
avg([1, 2, 3, 4, 5, 6]);

//defining function
function findLarges(x,y){
if (x>y){
    console.log (`${x}  is large`);
}
    else if(x<y){
        console.log(`${y} is larger`)
    }
    else{
        console.log(`${x} and ${y} are equal`);
    }

}
findLarges(6,12)

function add (x,y){
    return x+y;//returns only one value
    //console.log('Hello world');//wont be executed
    //return[x,y]//return multiple values
}
const total = add(6,4);
console.log(total);

function isPurple(color){
    if( color === 'red'){
    return true
    }
    else{ 
    return false
}
};
const  color= isPurple('purple')
console.log(color);
//write a isValidpassword function
//it accepts 2 parameters : password and username
//password must:
//-be atleast 8 characters
//-cannot contain spaces
//cannot contain user name
//if all requirements are met, return true.
//otherwise return false

function isValidPassword(username , password){
    if(password.length <8){
        return false;
    }
    if(password.indexOf(username)!== -1){
        return false;
    }
    if(password.indexOf(" ")!== -1){
        return false;
    }
    else{
        return true;
    }
};
const ppp= isValidPassword('Noeline','nabwire9');
    console.log(ppp);
    //A pangram is a sentence that contains every letter of the alphabet
    //"The quick brown fox jumps over the lazy dog"
    //write a  function called ispangram,which checks to see
    //make sure you ignore string casing!

  //  function isPangram(sentence){
    //let lowerCased = sentence.toLowerCase();
       // for(let char of 'abcdefghijklmnopqrstuvwxyz'){
           // if(lowerCased.indexOf(char)=== -1){
            //    return false;
           // }
       // }
        //return true; 
    //}
    //const panGram = isPangram('The quick brown fox jumps over the lazy dog')
//console.log(panGram);



function isPangram(sentence){
    let lowerCased = sentence.toLowerCase();
        for(let char of 'abcdefghijklmnopqrstuvwxyz'){
           if(!lowerCased.includes(char)=== -1){
               return false;
           }
       }
        return true; 
    }
    const panGram = isPangram('The quick brown fox jumps over the lazy dog')
console.log(panGram);
//function scope
let bird ='Mandrine Dack'
function birdWatch(){
    let bird = 'golden pheasant';
    console.log(bird);
};
console.log(bird);
birdWatch();

//Block scope
let radius =8;
if(radius>0){
    const PI = 3.14;
    let circ = 2* PI * radius;
    console.log(circ);
}
console.log(radius);
//LEXICAL SCOPE
function outer() {
    let movie = "Accident man";
    console.log(movie);
    function inner() {
        let movie = 'Shoot em up';
        console.log(movie.toUpperCase());
        //more nesting
        function extras(){
            console.log(movie.toUpperCase());
        }
        extras();
    }
    inner();
}
outer();

const sqquared= function (num) {
    return num*num;
}
sqquared(7);
console.log(sqquared(7));
//Functions are objects
//we can put them in avariable
//we can pass then in an object

//Higher oder functions
//are functions that operate on/with other functions: //they can return function
// accept other functions as arguments
function makeBetweenFunc(min, max){
    return function (val){
        return val >=min && val <= max;

    }
}
const inAgeRange = makeBetweenFunc(18, 100);
console.log(inAgeRange(17));
console.log(inAgeRange(68));
//callback function
//A callback function is a function passed into another functionas anargument,
// which is then invoked inside the outer function.

//hoisting
//variables declared with var are hoisted
{
    var y =1;
}
console.log(y);

//console.log(animal);
var animal = 'rabbit';
console.log(animal);
//automaticallyrepeat function a certain number of times
function rage(){
    console.log("I HATE EVERYTHING!");
}
function repeatNTimes(action , num){
for (let i = 0; i< num; i++){
    action();
}
}
repeatNTimes(rage,3);




