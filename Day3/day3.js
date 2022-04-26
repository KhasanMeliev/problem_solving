// Javascript Program to Check if a number is Positive, Negative, or Zero ✅
// JavaScript Program to Check Prime Number ✅
// JavaScript Program to Create Objects in Different Ways ✅
// JavaScript Program to Remove a Property from an Object ✅
// JavaScript Program to Clone a JS Object ✅
// JavaScript Program to Loop Through an Object ✅
// JavaScript Program to Merge Property of Two Objects ✅
// JavaScript Program to Convert Objects to Strings

//---------------------------Check if a number is Positive, Negative or Zero---------------------
// function checkPorNorZero(num) {
//   if (num > 0) {
//     return `${num} is positive number`;
//   } else if (num == 0) {
//     return `zero`;
//   } else {
//     return `${num} is negative number`;
//   }
// }

// console.log(checkPorNorZero(32));

//-------------------------------Check Prime Number--------------------------

// function checkPrime(num) {
//   if (num < 2) {
//     return false;
//   } else {
//     for (let i = 2; i < num; i++) {
//       if (num % i == 0) {
//         return `${num} is not a prime number`;
//       }
//     }
//   }
//   return `${num} prime number`;
// }

// console.log(checkPrime(34));

//--------------------Create Objects in a Different Ways---------------------

//   let obj1 = {
//     name: "hasan",
//     age: 13,
//   };
//   let obj2 = new Object({
//     name: "hasan",
//     age: 13,
//     score: {
//       math: 80,
//       english: 100,
//     },
//   });
// console.log(obj1);

//-------------------------Remove a Property from an Object---------------------------
// function removeProperty() {
//   const user = {
//     name: "hasan",
//     age: 13,
//     hobby: "coding",
//   };
//   delete user.hobby;
//   return user;
// }
// console.log(removeProperty());

//------------------------Clone a JS Object---------------------

// function cloneJsObject() {
//   const user = {
//     name: "hasan",
//     age: 13,
//     hobby: "coding",
//   };

   //   const result = { ...user };
//   //   const result = Object.assign({}, user);
// //   const result = JSON.parse(JSON.stringify(user));
//   return result;
// }
// console.log(cloneJsObject());

//--------------------Loop Through Object
// function loopThrough() {
//   const user = {
//     name: "hasan",
//     age: 13,
//     hobby: "coding",
//     online: true,
//   };
//   for (let key in user) {
//     console.log(`${key}: ${user[key]}`);
//   }
// }
// loopThrough();

//----------------------Merge Property of two Object---------------------
// function mergeObject() {
//   const user = {
//     name: "hasan",
//     age: 13,
//   };
//   const userHobby = {
//     hobby: "coding",
//   };
//   const result = { ...user, ...userHobby };
//   return result;
// }

// console.log(mergeObject());

// function fibonacci(num) {
//   let n1 = 0;
//   let n2 = 1;
//   let nextTerm;
//   for (let i = 1; i <= num; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
//   }
// }
// console.log(fibonacci(4));
// //output = 0,1,1,2

