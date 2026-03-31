// alogrithms

// function addUpTo(n) {
//     return n * (n+1) / 2
// }
// addUpTo(3)

// recurrsion
function reverseStr(str) { // reversing a string "race" to "ecar"
    if (str.length <= 1) {
        return str;
    }
    return reverseStr(str.slice(1)) + str[0];
}
console.log("string reverse",reverseStr('race'))
function isPalindrome(str) { // checks the string is same on reversing string "racecar" to "racecar"
    if (str.length == 1) {
        return true;
    }
    if (str.length == 2) {
        return str[0] === str[1];
    }
    if (str[0] === str.slice(-1)) {
        return isPalindrome(str.slice(1,-1))
    } 
    return false
}
console.log("isPalindrome",isPalindrome("racecar"))

function flattern(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let nwArr = [];
    for(let i=0;i<arr.length;i++) {
       if (Array.isArray(arr[i])) {
           nwArr = nwArr.concat(flattern(arr[i]))
       } else {
           nwArr.push(arr[i]);
       }
    }
    return nwArr
}
console.log("flattern array ",flattern([1,2,[3],4,[5,6]]))
function capitalize(arr) {
    if (arr.length == 1) {
        return [arr[0].toUpperCase()]
    }
    let res = capitalize(arr.slice(0,-1))
    res.push(arr.slice(arr.length-1)[0].toUpperCase())
    return res
}
console.log("capitalize array",capitalize(['string','increase']))

function capitalizeFirstStringIn(arr) {
      if (arr.length == 1) {
          return [arr[0][0].toUpperCase()+arr[0].substr(1)]
      }
    let res = capitalizeFirstStringIn(arr.slice(0,-1))
    let string = arr.slice(arr.length-1)[0][0].toUpperCase()  + arr.slice(arr.length-1)[0].substr(1)
    res.push(string)
    return res
}
console.log("capitalize first word in array",capitalizeFirstStringIn(['string','increase']))

function stringfiyNumToStr(obj) {
    let nwObj = {};
    for(var i in obj) {
        if (typeof obj[i] == 'object') {
            nwObj[i] = stringfiyNumToStr(obj[i]);
        } else if (typeof obj[i] == 'number') {
            nwObj[i] = obj[i].toString()
        } else {
            nwObj[i] = obj[i]
        }
    }
    return nwObj;
}
console.log("convert num to string in object",stringfiyNumToStr({
    a:1,
    b:{
        c:2
    }
}))
// binary search
function binarySearch(arr, searchNum) { 
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while(arr[middle] !== searchNum && start <= end) {
        if (searchNum < arr[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
        middle = Math.floor((start + end) / 2);
    }
    return (arr[middle] == searchNum) ? middle : -1
}
console.log("binary search index", binarySearch([1,2,3,4,5,6], 5))

function searchShortStrInLongStr(long, short) {
    let count = 0;
    for(let i=0;i<long.length;i++) {
        for(let j=0;j<short.length;j++) {
            if (short[j] !== long[i+j]) {
                break;
            }
            if(j == short.length - 1) {
                count++
            }
        }
    }
    return count;
}
console.log("Search short text in long text",searchShortStrInLongStr("testedtestingitemsinfromtestingteam","test"))


function factorial(num) { // it works by multipling the entered number eg. entered 3 then 1* 2* 3
    if (num <= 1) {
        return num
    }
    return factorial(num-1) * num
}
console.log("factorial number",factorial(10))

function fibonacci(num) {
    if (num == 0 || num == 1) {
        return num
    }
    return fibonacci(num-1) + fibonacci(num-2)
}
console.log(fibonacci(10))

function printInRec(num) {
    // console.log("loop",num)
    return (num <= 1 ) ? num : printInRec(num-1)
}
printInRec(10)

// function findUnique(arr) {
//     for(let i=0;i<arr.length;i++) {
//         for(let j=i; j<arr.length;j++) {
//             if (arr[i] + arr[j] == 0) {
//                 return [arr[i], arr[j]]
//             }
//         }
//     }
// }
// console.log(findUnique([1,1,2,3,4,4,5, 0, -1, -1, -2]))

function bubleSort(arr) {
    for(let i=0; i<arr.length; i++) {
      for(let j=0; j<arr.length;j++) {
        if (arr[j] > arr[j+1]) {
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        }
          // console.log(arr)
      }
    }
    return arr
}
console.log("bubblesort",bubleSort([5,3,2,1,8]))

function selectionSort(arr) {
    for(let i=0; i<arr.length; i++) {
        let lowest = i;
      for(let j=i+1; j<arr.length;j++) {
          let lower = j
        if (arr[lower] < arr[lowest]) {
              [arr[lowest] , arr[lower]] = [arr[lower], arr[lowest]]
        }
          // console.log(arr)
      }
    }
    return arr
}
console.log("selectionSort",selectionSort([5,3,2,1,8]))

function insertionSort(arr) {
    for(var i=0; i< arr.length; i++ ) {
        let currValue = arr[i];
        for(var j=i - 1; j >= 0 && arr[j] > currValue; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currValue;
    }
    return arr;
}
console.log("Insertion Sort: ",insertionSort([1,5,2,3,9,7]));

function merge(array1, array2) {
    let result = [];
    let i=0;
    let j=0;
    while(i < array1.length && j < array2.length) {
        if (array2[j] > array1[i]) {
            result.push(array1[i]);
            i++;
        } else {
            result.push(array2[j]);
            j++;
        }
     } 
    while(i < array1.length) {
        result.push(array1[i]);
        i++;
    }
    while(j < array2.length) {
        result.push(array2[j]);
        j++;
    }
    return result;
}
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    let mid = Math.floor(array.length/2);
    let left = mergeSort(array.slice(0,mid));
    let right = mergeSort(array.slice(mid));
    return merge(left,right);
}
console.log("mergeSort", mergeSort([-1,0,9,2,-2,7,4]))

function pivot(arr, start=0, end=arr.length) {
    function swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    var pivoteIndex = arr[start];
    var swapIndex = start;
    for(var i=start+1; i< arr.length; i++) {
        if (pivoteIndex > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, start, swapIndex)
    return swapIndex;
}

function quickSort(arr, left=0, right=arr.length-1) {
    if (left < right) {
        let pivotInd = pivot(arr, left, right);

        quickSort(arr, left, pivotInd-1);
        quickSort(arr, pivotInd+1, right);
    }
    return arr;
}
console.log("quickSort",quickSort([1,0,5,2,9,-2,-0]))

function getTotalDigits(arr) { // gets the highest digit count 
  let result=0;
  for(let i=0;i<arr.length;i++) {
    if (result < arr[i].toString().length) {
      result = arr[i].toString().length
    }
  }
  return result;
}
console.log("Radix-helper-getTotaldigit",getTotalDigits([1,234,9876]) )

function getDigitIndex(num, i) { // gets the value of number index in reverse format
  return Math.floor(Math.abs(num) / 10 ** i) % 10
}
console.log("Radix-helper-getDigitIndex",getDigitIndex(9876,0) )

// function getNumCount(num) {
//   if (num == 0) {
//     return 1;
//   }
//   return num.toString().length-1
// }
// console.log("Radix-helper-getNumCount",getNumCount(0) )

function radixSort(arr) {
  let getRunCount = getTotalDigits(arr);
  for(let i=0;i<getRunCount;i++) {
    let arrBucket = Array.from({length:10},()=>[]);
    for(let j=0;j<arr.length;j++){
      arrBucket[getDigitIndex(arr[j],i)].push(arr[j])
    }
    arr = [].concat(...arrBucket)
  }
  return arr;
}
console.log("Radix Sort : ", radixSort([6319872398218,100,91,3,92,3,8888,3, 99121219283]))