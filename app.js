const name = 'Ashley Salinas';

function toUpper(text) {
    const upperCased = text.toUpperCase();
    console.log(upperCased);
}

toUpper(name);

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

function adder(num1, num2, num3) {
    console.log (num1 + num2 - num3)
}

adder(50, 50, 1);

