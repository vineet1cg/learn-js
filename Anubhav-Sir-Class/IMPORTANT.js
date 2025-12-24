function rotateArrayToRight(arr, k) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    temp[(i + k) % arr.length] = arr[i];
  }
  return temp;
}
// console.log(rotateArrayToRight([1, 2, 3, 4, 5],1));

function bubble_sort(nums) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
}
// best case O(n)
// worst case O(n^n)
// space complexity = O(1)
// console.log(bubble_sort([29,10,14,37,14]));

// selection sort

function selection_sort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
  }
  return nums;
}
// O(n^2)
// O(1) space
// console.log(selection_sort([29,10,14,37,14]));

function insertion_sort(nums) {
  for (let i = 1; i < nums.length; i++) {
    const key = nums[i];
    let j = i - 1;
    while (j >= 0 && nums[j] > key) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = key;
  }
  return nums;
}
// console.log(insertion_sort([29,10,14,37,14]))

// binary search in sorted array

function countOccurances(nums, n) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === n) {
      count++;
    }
  }
  return count;
}
function PairSum(nums, target) {
  let arr = [];
  let n = nums.length;
  let i = 0;
  let j = n - 1;
  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum > target) {
      j--;
    } else if (sum < target) {
      i++;
    } else {
      arr.push(i);
      arr.push(j);
      return arr;
    }
  }
  return -1;
}
// console.log(PairSum([1, 2, 3, 4],5));

// maximum subarray sum

function maxSubArraySum(arr) {
  let max = -Infinity;
  let currentSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentSum = currentSum + arr[i];
    max = Math.max(currentSum, max);
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return max;
}
function maxSumOfSubArraysizeK(arr, k) {
  let maxSum = -Infinity;
  for (let start = 0; start < arr.length - k + 1; start++) {
    let currentSum = 0;
    for (let end = start; end < k + start; end++) {
      currentSum = currentSum + arr[end];
      maxSum = Math.max(currentSum, maxSum);
    }
  }
  return maxSum;
}
console.log(maxSumOfSubArraysizeK([1, 2, 3, 4, 5], 2));

function removeConsicuteDups(str) {
    // used regex
  return str.replace(/(.)\1+/g, "$1");
}
console.log(removeConsicuteDups("aaabbcdddaa"));

function binarySearch(arr, target) {

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

const removeConsecutiveDuplicatesFilter = (arr) => {
  return arr.filter((currentElement, i) => {
    
    return i === 0 || currentElement !== arr[i - 1];
  });
};
