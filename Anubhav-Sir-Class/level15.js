function sumOfOdd(arr){
    let sum = 0 ;
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i]%2!==0){
            sum+=arr[i];
        }
    }
    return sum;
}
function swapIndices(arr,i,j){
    [arr[i],arr[j]] = [arr[j],arr[i]];
    return arr;
}
// console.log(swapIndices([1, 2, 3, 4],1,3));

function rotateArrayRight(nums, k) {
  const n = nums.length;

  k = k % n;

  if (k === 0) {
    return nums;
  }

  const rightPart = nums.slice(n - k);
  const leftPart = nums.slice(0, n - k);
  
  return rightPart.concat(leftPart);
}
function rotateArrayLeft(nums,k){
    const n = nums.length;

  k = k % n;

  if (k === 0) {
    return nums;
  }
  const rightPart = nums.slice(n-k);
  const leftPart = nums.slice(0,n-k);
  return leftPart.concat(rightPart);
}
console.log(rotateArrayLeft([1, 2, 3, 4, 5],2));