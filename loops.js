//Doing things repeatedly
//allows us to change code
//avoid infinite loops
//types of loops
//1 For loop
//2 While loop
//3 for...of loop
//4 for...in loop

// for(let i = 1; i<= 10; i++){
//     console.log(i);

// for(let i = 0; i<= 20; i++){
//     console.log(i);
// }
// for(let i = 20; i>=10; i--){
//     console.log(i);
// }
// for (let i = 50; i>= 0; i -= 10){
//     console.log(i);
// }
for (let i =0; i<= 50; i += 10){
    console.log(i);
}
//for loops and arrays
//to loop over an array, start at 0 and continue to the last index(length-1)
const animals =['lions','tigers','bears'];
for (let i = 0; i<animals.length; i++) {
    console.log(`animals at index of${i} is ${animals[i]}`)
}
//nested loops
let str = 'LOL';
for (let i = 0; i<= 4; i++) {
    console.log('outer', i);
    for (let j = 0; j<str.length; j++) {
        console.log('inner:',str[j]);
    }
};

//while loops
//continues to run as long as its test condition is true
let num= 0;
while (num< 10) {
    console.log(num);
    num++;
}
//FOR...OF
//A nice and easy way of interacting over arrays
//for (variable of literable) {
for (let ltd of 'yell') {
    console.log(ltd);
}
let st = "yell";
for (let i=0; i<st.length; i++){
    console.log(st[i]);
}
let subreddits = ['soccer','popheads','cringe','books'];
for(let sub of subreddits) {
    console.log(`${sub} - www.reddit.com/r/${sub}`);
}
//NESTED FOR...OF LOOPS
const magicSquare = [
    [2,7,6],
    [9,5,1],
    [4,3,8]
];
for (let row of magicSquare) {
    let sum = 0;
    for(let num of row) {
        sum+=num
    }
    console.log(`Row of ${row} sums to ${sum}`);
}
//console.log(magicSquare[0][1]);//accessing elementswithin a nest
//Objects(objects.keys())
const movieReviews ={
    Amadeus : 10,
    Arrival : 9.5,
    Allien : 9,
    Amellie : 8
};
for (let movie of Object.keys(movieReviews)){
let score = movieReviews[movie];
console.log(`I rated ${movie} ${score}/10`);
}

//for (let movie of Objects.keys(movieReviews)){
 //   console.log(movie);
//}

const teams ={
    chelse : 1,
    mancity : 2,
    PSG : 3,
    Tottenum :4
};
for (let tm of Object.keys(teams)){
    let position = teams[tm];
    console.log(` ${tm} is position ${position}/4 in EPL`);
}
// FOR ...IN for (variable in object){
   // statement
//}
const jeopardyWinnings = {
    regularPlay  : 2522700,
    watsonChallenge : 300000,
    tournamentOfChampions :500000,
    battleOfTheDecades : 100000
};
let total = 0;
for(let key in jeopardyWinnings){
    total+=jeopardyWinnings[key];
};
console.log(total);
//for (let key in jeopardyWinnings){
   // total += `ken Jenings total winnings is ${total + jeopardyWinnings[key]}`;
//}
//console.log(total);
//FUNCTIONS
//The last big topic
//Reusable procedures
//allows us to write reusable, modular code
//we define a "chunk" of code that we can then execute at a later point
//we use them ALL THE TIME

//2 STEP PROCESS (DEFINE AND RUN)
//FUNCTION DECLARATION: function funcName(){
    //do something
//}

function grumpus(){
    consol
}





