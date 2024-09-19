const first = "Ashley";         //this is my concatenated string variable.
const town = "Del Rio, Tx"

console.log(`Hello I'm your classate and my name is ${first} and I am from ${town}.`);

//end

const person = {
        firstName: "Ashley",
        lastName : "Salinas",
        age      :  29
};

function info() {
    let x = "firstName";
    let y = "age";
    document.getElementById("info").innerHTML = person[x] + " is " + person[y] + " years old.";
}

info();

function displayDate() {
    document.getElementById('showdate').innerHTML = Date();
}

displayDate();

function logger()  {
    console.log('I hope I am doing this right!');
}

logger();

const old = 19;     //this is my "if" statement.

if(old > 21) {
    console.log("You are free to enter.");
} else if (old < 21) {
    console.log("Sorry, you are not able to enter.");
}
//end

let fruit = 'peaches';      //this is my switch statement.

switch (fruit) {
    case 'peaches':
        console.log('Peaches are my favorite.');
        break;
    case 'apple':
        console.log('Apples are good too.');
        break;
    case 'mango':
        console.log('Mangoes are even better than Apples.');
        break;
}
//end

let course = "    JavaScript makes me overthink.     ";     //this is my string method.
    console.log(course.trim());

//end

const PI = 3.141596254      //this is my number method.

const num = PI.toFixed(2);

console.log(num);

//end
