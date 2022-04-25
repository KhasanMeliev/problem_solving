//----------------FIND WOVELS

// function findWovels(str) {
//   let countWovels = 0;
//   let wovels = ["a", "e", "o", "u", "i"];
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < wovels.length; j++) {
//       if (str[i] == wovels[j]) {
//         countWovels++;
//       }
//     }
//   }
//   return countWovels;
// }

// console.log(findWovels("qwerhshdsajfabfhdjhwuqehwu"));

//          NEGATIVE NUMBERS

// function negativeNums(numbers) {
//   let negative = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 0) {
//        negative.push(numbers[i]);
//     }
//   }
//   return negative;
// }

// console.log(negativeNums([1, 2, 3, 5, -6, -8]));

//      LOWEST TO HIGHEST
// function sortedNums(...nums) {
//   let sorted = [];
//   for (let i = 0; i < nums.length; i++) {
//     sorted.push(
//       nums[i].sort((a, b) => {
//         return a - b;
//       })
//     );
//   }
//   return sorted;
// }

// console.log(sortedNums([3, 6, 2, 8, 7]));



//       SUM OF ALL NUMBERS

// function sumOfAllNums(...numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//    return numbers[i].reduce((a, b) => {
//       return a + b;
//     });
//   }
// }

// console.log(sumOfAllNums([1, 2, 6, 2, 8]));

// function sumOfAllNums2(nums) {
//   let total = 0;
//   for (let i = 0; i < nums.length; i++) {
//     total += nums[i];
//   }
//   return total;
// }

// console.log(sumOfAllNums2([12, 3, 5, 2, 4]));

//         REMOVE SPACE

// function removeSpace(str) {
//   let removed = /\s/g;
//   return str.replace(removed, "");
// }

// console.log(removeSpace("hasa dsds fg"));
