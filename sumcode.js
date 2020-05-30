// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
function sumAll(arr) {
    arr.sort(function(a,b){return a-b});
    var sum=0;
    // for(var i=0;i<arr.length;i++){
    //   console.log(arr[i])
    //   sum +=arr[i];
    // }
    var i=arr[0];
    console.log(arr[arr.length-1]);
    while( i<=arr[arr.length-1]){
      //console.log(arr[i]);
       sum += i;
       i++;
    }
    console.log(sum);
    return sum;
  }
  
  sumAll([1, 4]);
  