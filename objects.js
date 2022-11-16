//objects are collections of properties
//properties are a key-value pair
//carries all types of data i.e strings, numbers, booleans etc
//all keys are converted into strings

const fitBitData ={
    totalSteps: 308727
}

const person = {
age : 45,
cohorts : {
    cohortOne : 15,
    cohortTwo : 19
}
};
//The total number of the two cohorts is : 34!
const person1 = `The total number of the two cohorts is : ${person.cohorts.cohortOne+person.cohorts.cohortTwo}!`;
console.log(`&{person1}`)  

person.gender = 'female';
console.log(person.age);
person['city'] = 'erop';
console.log(person);

const firstNum ={
    one : 1,
    two : 2,
    three : 3
}
const secondNum ={
    one : 1,
    two : 2,
    three : 3
}
console.log(typeof firstNum);
console.log(typeof secondNum);
console.log(firstNum === secondNum);