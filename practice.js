// function index(arr, target) {
//   let index = [];

//   outer: for (let i = 0; i <= arr.length; i++) {
//     for (let j = i; j <= arr.length; j++) {
//       if (i != j && arr[i] + arr[j] == target) {
//         index = [i, j];
//         break outer;
//       }
//     }
//   }

//   return index;
// }

// let x = [3, 3];
// let y = 6;

// console.log(index(x, y));

// var findKDistantIndices = function (nums, key, k) {
//   let newArr = [];
//   for (let i = 0; i <= nums.length; i++) {
//     if (nums[i] >= k && nums[i] <= key) {
//       newArr.push(nums[i]);
//     }
//   }

//   return newArr.sort((a, b) => a - b);
// };

// console.log(findKDistantIndices([3, 4, 9, 1, 3, 9, 5], 9, 1));

// var isPalindrome = function (x) {
//   let y = x.toString();

//   if (y == y.split("").reverse().join("")) {
//     return true;
//   } else return false;
// };

// console.log(isPalindrome(121));

var findMedianSortedArrays = function (nums1, nums2) {
  let num = [...nums1, ...nums2];
  let med = 0;
  num.sort((a, b) => a - b);

  let len = num.length;

  if (len % 2 == 1) {
    med = num[Math.floor(num.length / 2)];

    return med;
  } else {
    let med1 = num[num.length / 2 - 1];
    let med2 = num[num.length / 2];

    med = (med1 + med2) / 2;

    return med;
  }
};

console.log(findMedianSortedArrays([1, 2], [3, 4]));
