//---------------------------PROBLEMS-------------------------------

// celcius to farenheit ✅
// JavaScript Program to Find the Largest Among Three Numbers ✅
// JavaScript Program to Find the Factorial of a Number ✅
// JavaScript Program to Print the Fibonacci Sequence
// JavaScript Program to Remove Duplicates From Array✅
// JavaScript Program to Validate An Email Address
// JavaScript Program to Convert Date to Number ✅
// JavaScript Program to Convert Kilometers to Miles ✅
// JavaScript Program to Check Armstrong Number ✅
// JavaScript Program to Replace Characters of a String ✅

//       Find the Largest Among three Numbers
// function findLargestAmongThreeNums(a, b, c) {
//   if (a >= b && a > c) {
//     return `${a}, ${b}, ${c} sonlari ichida ${a} eng kattasi`;
//   } else if (b > a && b > c) {
//     return `${a}, ${b}, ${c} sonlari ichida ${b} eng kattasi`;
//   } else {
//     return `${a}, ${b}, ${c} sonlari ichida ${c} eng kattasi`;
//   }
// }
// console.log(findLargestAmongThreeNums(20, 15, 20));

//----------------------------Convert Date To Number-------------------------

// function dateToNumbers() {
//   let date = new Date();
//   return date;
// }
// console.log(dateToNumbers());

//----------------------------Armstrong Number--------------------------
// function checkArmstrong(n) {
//   let sum = 0;
//   let temp = n;
//   let remainder;
//   while (temp > 0) {
//     remainder = temp % 10;
//     sum = sum + remainder * remainder * remainder;
//     temp = parseInt(temp / 10);
//   }
//   if (sum == n) {
//     return true;
//   } else {
//     return false;
//   }
// }

//-------------second way---------------

// function checkArmstrong(num) {
//   const toArray = num.toString().split("").map(Number);
//   const newNum = toArray
//     .map((a) => {
//       return a ** 3;
//     })
//     .reduce((a, b) => a + b);
//   if (newNum == num) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkArmstrong(153));

//-------------------Factorial Number-----------------
// function factorialize(num) {
//   if (num < 0) {
//     return -1;
//   } else if (num == 0) {
//     return 1;
//   } else {
//     return num * factorialize(num - 1);
//   }
// }
// console.log(factorialize(5));

// function factorialize(num) {
//   let output = num;
//   if (num == 0 || num == 1) {
//     return 1;
//   }
//   while (num > 1) {
//     num--;
//     output = output * num;
//   }
//   return output;
// }

// console.log(factorialize(5));

// function factorialize(num) {
//   if (num == 0 || num == 1) {
//     return 1;
//   }
//   for (let i = num - 1; i >= 1; i--) {
//     num = num * i;
//   }
//   return num;
// }

// console.log(factorialize(5));

//-----------------Kilometres to Miles------------------

// function kilometresToMiles(km) {
//   const miles = km / 1.6;
//   return miles;
// }
// console.log(kilometresToMiles(2.2));

//-----------------Replace Character of a String
// function replaceCharacters() {
//   const text = "hello my name is husan";
//   return text.replace("husan", "hasan");
// }
// console.log(replaceCharacters());

//-----------------------Celsius to Farenheit

// function convertCtoF(celsius) {
//     let farenheit = celsius * (9 / 5) + 32; //first way to convert
//     let farenheit = (celsius * 1.8) + 32   //second way to convert
//     return farenheit
// }
// console.log(convertCtoF(55));

//------------------Remove Duplicate from Array

// function removeDuplicate(a) {
//   let b = [];
//   for (let i = 0; i < a.length; i++) {
//     if (b.indexOf(a[i]) === -1) {
//       b.push(a[i]);
//     }
//   }
//   return b;
// }
// console.log(removeDuplicate([1, 2, 4, 2, 3, 1, 4]));

// function convertCtoF(celcius) {
//   let farenheit = celcius * 1.8 + 32;
//   return farenheit;
// }
// console.log(convertCtoF(30));
// //output = 86


