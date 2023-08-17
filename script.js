// problem1  1 :-Print the even numbers in an array

// var arr = [1,2,3,4,5,6,7,8];
// var result = [];
// function even(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(even(arr));


// Anonyomus Function

// var arr = [1,2,3,4,5,6,7,8];
// var result = [];
// var even = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };
// console.log(even(arr));


// IIFE (Immediately Invoked Function Expression//Example :)

// (function even(arr) {
//     var result = [];
//     for (var i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 == 0) {
//         result.push(arr[i]);
//       }
//     }
//     console.log(result);
//   })([1,2,3,4
// ,5,6,7,8]);


// Arrow Function (ES6)

// const even = (arr) => {
//     var result = [];
//     for (var i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 == 0) {
//         result.push(arr[i]);
//       }
//     }
//     return result;
//   };
//   console.log(even([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// </-----------------------------------------------------------------/>

// problem 2 :print the palindrom arrays

// const arr = [121, 232, 345,"madam", 9876, 353, 898];
// const result = [];

// function isPalindrome(num) {
//     const numStr = num.toString();
//     return numStr === numStr.split('').reverse().join('');
// }

// function findPalindromes(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (isPalindrome(arr[i])) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// console.log(findPalindromes(arr));





// Anonyomus Function:
 
// const arr = [121, 232, 345, 9876, 353, 898];
// const result = [];
// const isPalindrome = function (num) {
//     const numStr = num.toString();
//     return numStr === numStr.split('').reverse().join('');
// };

// const findPalindromes = function (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (isPalindrome(arr[i])) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// };

// console.log(findPalindromes(arr));

// IIFE (Immediately Invoked Function Expression//Example :)


//   const inputArray = [121, 232, 345, 9876, 353, 898];

//   const palindrome = (function () {
//     function isPalindrome(num) {
//       const numStr = num.toString();
//       const reversedStr = numStr.split("").reverse().join("");
//       return numStr === reversedStr;
//     }
  
//     return function (arr) {
//       const result = [];
//       for (const i = 0; i < arr.length; i++) {
//         if (isPalindrome(arr[i])) {
//           result.push(arr[i]);
//         }
//       }
//       return result;
//     };
//   })();
  
//   console.log(palindrome(inputArray.slice()));
  

// Arrow Function (ES6)

// const isPalindrome = (num) => {
//     const numStr = num.toString();
//     const reversedStr = numStr.split("").reverse().join("");
//     return numStr === reversedStr;
//   };
  
//   const palindrome = (arr) => {
//     const result = [];
//     for (const i = 0; i < arr.length; i++) {
//       if (isPalindrome(arr[i])) {
//         result.push(arr[i]);
//       }
//     }
//     return result;
//   };
  
//   const inputArray = [121, 232, 345, 9876, 353, 898];
//   console.log(palindrome(inputArray.slice()));



