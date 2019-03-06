
const name = "Rodney";
const hobbies = ["rugby", "sleep"];

const es5  = 'Hi my name is ' + name + ", in my spare time I like to play " + hobbies[0] + " and " + hobbies[1] + ".";
const es6 = `Hi my name is ${name}, in my spare time I like to play ${hobbies[0]} and ${hobbies[1]}.`

console.log(es5);
console.log(es6);  

