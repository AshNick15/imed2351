
    //this is my object
const person = {
    firstName: "Logan",
    species: "Human Mutant",
    origin: "Canada",
}
console.log(person.firstName);
console.log(person.species);
    //end

   //this is my object method
const car = {
    brand: 'Motorcycle',
    honk: function() {    
        return 'Vroom! Vroom!';
    }
};
console.log(car.honk());
    //end

    //this is my array
 let xmen = ['Rogue', 'Gambit', 'Wolverine', 'Beast', 'Jubilee'];   
 console.log(xmen[2]);
    //end

    //this is my array method
let letters = ['A', 'X', 'I'];  
console.log(letters.indexOf('X'));
    //end

function logger()  {
    console.log('I hope I am doing this right!');
}
logger();
