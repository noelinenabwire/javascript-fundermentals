let animal ="dog";
console.log(animal.length);
//access individual characters in a string
console.log(animal[3]);

let msg ="I am king";
let yellMsg= msg.toUpperCase();
console.log(yellMsg);

let angry ="LeaVe Me aLoNe";
let lower = angry. toLowerCase();
console.log(lower);

//trim method

let greeting = "  leave me alone plz  ";
console.log(greeting);
let greeting1 =greeting.trim();
console.log(greeting1);

let tvshow ="catdog";
let firstIndex =tvshow.indexOf("cat");
console.log(firstIndex);

//slice
let str ='lokichoggio';
console.log(str);

let partofstr = str.slice(2,5);
console.log(partofstr);
//replace
let annoyingLaugh = 'teehee so funny! teehee!';
console.log(annoyingLaugh);
annoyingLaugh.replace('teehee','haha');
let replacer = annoyingLaugh.replaceAll('teehee','haha');
console.log(replacer);

//template literals
let totals = `We are ${20}`;
console.log(totals);

let cohortOne = 15;
let cohortTwo = 20;

let femidevs = `We are ${cohortOne + cohortTwo} in total`;
console.log(femidevs);
let drinks = 'soda';
let quantity = 2;
let price = 970;

// We bought 2 crates of soda at kshs.1940
let crates = `We bought 2 crates of soda at kshs ${quantity*price}`;
console.log(crates);

