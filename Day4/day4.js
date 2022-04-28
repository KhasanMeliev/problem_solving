//---------------------------Remove Item-----------------
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function removeItem(arr, num) {
//   if (arr.hasOwnProperty(num)) {
//     return arr.filter((item) => {
//       return item !== num;
//     });
//   }
//   return `${num} soni bu arrayda topilmadi`;
// }
// console.log(removeItem(array, 3));

//--------------------------Insert an item at a specific index into an array-----------------

// output: [1,2,3,8,4,5]
// function insertElement(elem, index) {
//   let array = [1, 2, 3, 4, 5];
//   array.splice(index, 0, elem);
//   return array;
// }
// console.log(insertElement(8, 3));

//--------------------------------Compare two arrays---------------------------------
// const array1 = [1, 3, 5, 8];
// const array2 = [1, 3, 5, 8];
// function compareArrays(arr1, arr2) {
//   let arr1Elements = JSON.stringify(arr1);
//   let arr2Elements = JSON.stringify(arr2);
//   if (arr1Elements === arr2Elements) {
//     return `bu arraylar bir biriga teng`;
//   } else {
//     return `bu arraylar bir biriga teng emas`;
//   }
// }
// console.log(compareArrays(array1, array2));
// let array1 = [1, 2, 3, 4, 5];
// let array2 = [1, 2, 3, 4, 5];
// function compareArrays(arr1, arr2) {
//   if (arr1.length == arr2.length) {
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] == arr2[i]) {
//         return "arraylar teng";
//       } else {
//         return "arraylar teng emas";
//       }
//     }
//   } else {
//     return false;
//   }
// }
// console.log(compareArrays(array1, array2));

//----------------------------Get random Item fron an Array-------------------
// let array = [1, 2, 3, 4, 5, 6, 7, 8];
// function randomItem(arr) {
//   let randomItem = arr[Math.floor(Math.random() * arr.length)];
//   return randomItem;
// }

// console.log(randomItem(array));

//-------------------------Check if a Key Exists in an Object-----------------
// let user = {
//   name: "hasan",
//   age: 13,
//   hobby: "coding",
// };
// let checkKey = "name" in user;
// if (checkKey) {
//   console.log("key exists");
// } else {
//   console.log("key doesn't exists");
// }

//------------------------- Add Key/Value Pair to an Object---------------
// let user = {
//   name: "hasan",
//   age: 13,
// };
// let add = (user["hobby"] = "coding");
// console.log(user);

//----------------------------------Extract Value----------------
// let objArray = [
//   { a: 1, b: 2 },
//   { a: 4, b: 5 },
//   { a: 8, b: 9 },
// ];
// function extractValue(arr, prop) {
//   let extracted = arr.map((item) => item[prop]);
//   return extracted;
// }
// console.log(extractValue(objArray, "a"));

// JavaScript Program to Check if An Array Contains a Specified Value
// const array1 = [1, 2, 3];
// const array2 = [2, 3, 5];
// function getUniqueAfterMerge(arr1, arr2) {
//   let merge = [...arr1, ...arr2];
//   let b = [];
//   for (let i = 0; i < merge.length; i++) {
//     if (b.indexOf(merge[i]) === -1) {
//       b.push(merge[i]);
//     }
//   }
//   return b;
// }
// console.log(getUniqueAfterMerge(array1, array2));

//-------------------Perform Intersection-----------------
// const array1 = [1, 2, 3, 4, 6];
// const array2 = [1, 2, 8, 9];
// function performIntersection(arr1, arr2) {
//   let setArr1 = new Set(arr1);
//   let setArr2 = new Set(arr2);
//   let result = [];
//   for (let i of setArr2) {
//     if (setArr1.has(i)) {
//       result.push(i);
//     }
//   }
//   return result;
// }
// console.log(performIntersection(array1, array2));
//----------------second way-----------
// const array1 = [1, 2, 3, 5, 9];
// const array2 = [1, 3, 5, 8];
// function performIntersection(arr1, arr2) {
//   const result = arr1.filter((x) => {
//     return arr2.indexOf(x) !== -1;
//   });
//   return result;
// }
// console.log(performIntersection(array1, array2));
