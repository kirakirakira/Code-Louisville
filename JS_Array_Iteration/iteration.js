// const fruits = ['apple', 'pear', 'cherry'];
// let capitalizedFruits = [];
//
// fruits.forEach(fruit => {
//   let capitalizedFruit = fruit.toUpperCase();
//   capitalizedFruits.push(capitalizedFruit);
// });

// console.log(capitalizedFruits);

// const prices = [6.75, 3.10, 4.00, 8.12];
// let total = 0;
// prices.forEach(price => {
//   total += price;
// });

// console.log(total);
//
// const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
//
// const startsWithS = name => name[0] === 'S';
//
// const sNames = names.filter(startsWithS);

// console.log(sNames);

// names.forEach((name, index, array) => {
//   console.log(name, index, array[index]);
// });

// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const evens = numbers.filter(number => number % 2 == 0);

// console.log(evens);

// const strings = ['1', '2', '3', '4', '5'];
// const numbers = strings.map(string => parseInt(string, 10));
//
// console.log(numbers);
//
// const fruits = ['apple', 'pear', 'cherry'];
// const capitalizedFruits = fruits.map(fruit => fruit[0].toUpperCase() + fruit.slice(1,fruit.length));
//
// console.log(capitalizedFruits);
//
// const prices = [5, 4.23, 6.4, 8.09, 3.20];
//
// const pricesFormatted = prices.map(price => '$' + price.toFixed(2));
//
// console.log(pricesFormatted);

// var total = [2, 2, 3, 4, 5].reduce(
//   (acc, cur) => acc + cur
// );
//
// console.log(total);
//
// const prices = [5, 4.23, 6.4, 8.09, 3.20];
//
// const bill = prices.reduce((acc, cur) => acc + cur).toFixed(2);
//
// console.log(bill);
//
// const names = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];
//
// const numG = names.reduce((count, name) => {
//   if (name[0] === 'G') {
//     return count + 1;
//   }
//   return count;
// }, 0);
//
// console.log(numG);
//
// const arr = [1,2,3];
//
// const smallerArr = arr.filter(number => number !== 2);
// const incrementedArr = smallerArr.map(number => number + 1);
//
// console.log(incrementedArr);
//
// const users = [
//   {name: 'Samir', age: 27},
//   {name: 'Angela', age: 29},
//   {name: 'Beatrice', age: 32}
// ];
//
// let newUsers = [];
// newUsers = users.filter(user => user.name !== 'Samir');
//
// console.log(newUsers);
//
// let userAges = [];
// userAges = users.map(user => user.name + " is " + user.age + " years old.");
//
// console.log(userAges);
//
// const usersObject = users.reduce((usersObject, user) => {
//   usersObject[user.name] = user.age;
//   return usersObject;
// }, {});
//
// console.log(usersObject);
//
// const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];
// newUsers = userNames.filter(user => user[0] === 'S').map(user => ({'name': user}));
//
// console.log(newUsers);

// const users = [
//   {name: 'Samir', age: 27},
//   {name: 'Angela', age: 33},
//   {name: 'Beatrice', age: 42},
//   {name: 'Shaniqua', age: 30},
//   {name: 'Marvin', age: 23},
//   {name: 'Sean', age: 47}
// ];
//
// let newUsers = [];
//
// newUsers = users.filter(user => user.age >= 30).map(user => user.name);
//
// console.log(newUsers);


const products = [
  { name: 'hard drive', price: 59.99 },
  { name: 'lighbulbs', price: 2.59 },
  { name: 'paper towels', price: 6.99 },
  { name: 'flatscreen monitor', price: 159.99 },
  { name: 'cable ties', price: 19.99 },
  { name: 'ballpoint pens', price: 4.49 }
];

    // Result: { name: 'paper towels', price: 6.99 }
let productUnder10 = products
  .filter(product => product.price < 10)
  .reduce((highest, product) => {
    if (highest.price > product.price ){
      return highest;
    }
    return product;
  });

console.log(productUnder10);

let totalOver10 = products
  .filter(product => product.price > 10)
  .reduce((total, product) => total + product.price, 0)
  .toFixed(2);

console.log(totalOver10);

const movies = [
  ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters'],
  ['Finding Dory'],
  ['Jaws', 'On the Waterfront']
];

const flatMovies = movies.reduce((arr, innerMovies) => [...arr, ...innerMovies], []);

console.log(flatMovies);

const users = [
  {
    name: 'Samir',
    age: 27,
    favoriteBooks:[
      {title: 'The Iliad'},
      {title: 'The Brothers Karamazov'}
    ]
  },
  {
    name: 'Angela',
    age: 33,
    favoriteBooks:[
      {title: 'Tenth of December'},
      {title: 'Cloud Atlas'},
      {title: 'One Hundred Years of Solitude'}
    ]
  },
  {
    name: 'Beatrice',
    age: 42,
    favoriteBooks:[
      {title: 'Candide'}
    ]
  }
];

const books = users
  .map(user => user.favoriteBooks.map(book => book.title))
  .reduce((arr, titles) => [...arr, ...titles], []);

console.log(books);
