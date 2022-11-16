//CREATING ARRAYS
let students = [];
students[0] = 'femi';
students[1] ='devs';
students.push('busia');
students.push(4);
students.push(true);
console.log(students);
//array of strings
let colors = ['red','orange', 'yellow'];
console.log(colors);
//array of numbers
let lottoNums = [19,22,56,12,51];
console.log(lottoNums);
//A mixed array
let stuff = [true,68,'cat',null];
console.log(stuff);
let fruits = ['orange','apples',20,false,undefined];
fruits[0] = 'milk';
console.log(fruits);

let footballteams = ['manchester united','chelsea','arsenal'];
let numOfTeams = [4,6,1];

let merged = footballteams.concat(numOfTeams);
let newlyMerged = numOfTeams.concat(footballteams);
console.log(newlyMerged);
console.log(merged);