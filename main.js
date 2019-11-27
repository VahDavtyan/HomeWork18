//1.Write all following functions example with arrow function


// function sum (a, b) {
//     return a + b;
// }

let sum = ( a, b ) => a + b

// function isPositive (number) {
//     return number >= 0
// }

let isPositive = number => number >= 0 

// function randomNum () {
//     return Math.random
// }

let randomNum = () => Math.random



// document.addEventListener('click', function () {
//     console.log('clicked!!')
// })


document.addEventListener ('click',() => console.log ('cliched!!'))




//2.Write a Person constructor which have name, and method printNameFunction(normal function), 
//which method has SetTimeOut callback function and console the person name after 2second 


function Person (name) {
    this.name = name;
    this.printNameFunction = setTimeout(function () {
        console.log (this.name)
    }, 2000);
    
};

Person("Vahagn")



// 3.Write a Person constructor which have name, and method printNameArrow(arrow function),
// which method has SetTimeOut callback function and console the person name after 2second 


function Person (name) {
    this.name = name;
    this.printNameArrow = setTimeout(() => {
        console.log (this.name)
    }, 2000);
    
};

Person("Vahagn")


//4.We have student object check if the score is greather than 100  
//add the pass property to true, else will be false


let student = {
    name: 'Mary',
    score: 90
};

 if (student.score > 100){
     console.log(true)
 } else {
     console.log(false)
 };

  
//  5.Write nesteed ternary operator example



let student = {
    name: 'Mary',
    score: 90
};

let value = student.score > 100 ? true : false;
  

console.log(value)




// 6.Write a js program to create a new string adding "new" in front of given string.
// if the given string begins with "new" already return the original string with ternary operators.



function adding(str) {
    if (str === null || str === undefined || str.substring(0, 3) === 'new') {
      return str;
    }
    return "new" + str;
  }
  
  console.log(adding("newYork"));
  

//   7.Write arrow function and check if the cat is hungry return feed the cat ,else do not feed the cat.




  let feedForCat = (cat) => {
      if (cat === "hungry") {
          return 'Feed the cat'
      } else {
          return "not feed the cat"
      };
  };








 

