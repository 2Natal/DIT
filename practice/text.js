//working on my external Javascript file
//allert
alert("Welcome to Javascript in DIT 2025.");

//confirmation
let isconf = confirm("Do you want to proceed?");
console.log(isconf);

//prompt
let userName = prompt("Wnaht is your name?");
console.log(`Hello, ${userName}!`);


//functions
//native functions
function add(p1 , p2) {
    var sum = p1 + p2
    console.log("The sum of the values entered is " + sum)
}
add(12,10)
add(30,30)

//arrow functions
add = (a,b) => a + b;
console.log(add(5,6));


//more on arrrow functions
diff = (num1,num2) => num1 - num2;
console.log(diff(10 , 4));