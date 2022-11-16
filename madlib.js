function madlib(adjective,noun,verb,adverb){
    return `The ${adjective} ${noun} ${verb} very ${adverb}`;
}
let mad = madlib('black','dog','run','quickly');
console.log(mad);
//write a function 
//pass arguments adjective precedence
//use return function insted of console.log
//call three functions with different sentence
function madlib2(adjective,noun,verb,adverb){
    return `The ${adjective} ${noun} ${verb} around the farm ${adverb}`;
}
let mad2 = madlib2('blue','bird','flew','slowly')
console.log(mad2)
let mad3= madlib2('brown','man','walked','quickly')
console.log(mad3);
let mad4 = madlib2('pink','fence','fit','perfectly')
console.log(mad4);

function isPurple(color)