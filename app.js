
const button = document.getElementById("myButton");
const paragraph = document.getElementById("myParagraph");

button.addEventListener("click", () => {
    paragraph.classList.toggle("hidden");
});

for (let i = 18;i < 26; i++) {      //this is my forLoop
    console.log(i); 
}
    //end

const colors = [`Orange`, `Black`, `White`] ;      //this is my whileLoop

let color = 0;

while (color < colors.length) {
    console.log(`${colors[color]}`);
    color++;
}
  //end

function logger()  {
    console.log('I hope I am doing this right!');
}
logger();
