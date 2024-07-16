//Exercise 1
const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const nums2 = nums.map((currentElement) => {
    return currentElement + '5';
});

console.log(nums2);

//Exercise 2
const pizzaTops = ['Pineapple', 'Olives', 'Anchovies'];
const [firstTopping, secondTopping] = pizzaTops;
console.log(firstTopping);  
console.log(secondTopping); 

//Exercise 3
const car = {
    make: 'Audi',
    model: 'q5',
  };

const { make, model } = car;
  console.log(make); 
  console.log(model); 

  console.log(car.make); 
  console.log(car.make); 

  //Exercise 4
const pizzas = ['Pineapple', 'Olives', 'Anchovies'];
const vegetables = ['broccoli', 'carrot', 'spinach'];

const pizzasAndVegetables = [...pizzas, ...vegetables];

console.log(pizzasAndVegetables);

  //Exercise 5

const cars = {
    make: 'Audi',
    model: 'q5',
  };

const myCar = { ...car, model: 'q7' };

console.log(car);
console.log(myCar); 

   //Exercise 6

const userProfile = {};
const propertyName = 'username';
   userProfile[propertyName] = 'Aliyev55';

console.log(userProfile);  

   //Exercise 8
function describeAnimal(noun = 'cat', adjective = 'white') {
console.log(`The ${noun} is ${adjective}.`);
}
    // Example usage:
describeAnimal(); // Logs: "The cat is white."
describeAnimal('dog', 'brown'); // Logs: "The dog is brown."
describeAnimal('bird', 'blue'); // Logs: "The bird is blue."

     
   //Exercise 9
  // Convert the following `if...else` statement in to a ternary:
  let pizza = 'tasty'
  if (pizza === 'tasty') {
    console.log('yum');
  } else {
    console.log('yuck');
  }
  // Your code here
  console.log(pizza === 'tasty' ? 'yum' : 'yuck');
  
  //Exercise 10
const localLangConfig = null; 
const LANG = localLangConfig || 'en';
console.log('Language setting:', LANG);
const userSavedTheme = null; 
const USER_THEME = userSavedTheme || 'light';
console.log('User theme setting:', USER_THEME);

//Exercise 11
const adventurer = {
    name: 'Alice',
  };
  let cat; 
  const catAge = adventurer.cat?.age;
  console.log(cat);
  console.log(catAge);
