function checkSorted(arr){
    var n = arr.length;
    var a = 0;
    for(let i = 0 ; i<n ; i++){
        if(arr[i]>arr[i+1]){
            a = 1;
            break;
        }
    }
    if(a==0){
            console.log("Array Is Sorted");
        } else {
            console.log("Array Is Not Sorted");
        }
    
}
var arr = [1,2,3,8,5];
checkSorted(arr);

