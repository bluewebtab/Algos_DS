function findRotatedIndex(arr, num) {
  let pivot = findPivot(arr);
  console.log(pivot)
  if (pivot > 0 && num >= arr[0] && num <= arr[pivot - 1]) {
    return binarySearch(arr, num, 0, pivot - 1);
  } else {
    return binarySearch(arr, num, pivot, arr.length - 1);
  }

}

function binarySearch(array, num, start, end) {
  if (array.length === 0) return -1;
  if (num < array[start] || num > array[end]) return -1;

  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    if (array[mid] === num) {
      return mid;
    } else if (num < array[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

function findPivot(arr) {
  if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    console.log(mid)
    console.log(start)
    console.log(end)
    if (arr[mid] > arr[mid + 1]) {
      console.log(mid)
      return mid + 1;
    } else if (arr[start] <= arr[mid]) {
      console.log(start)
      console.log(mid)
      start = mid + 1;
      console.log(start)
    } else {
      console.log(end)
      end = mid - 1;
      console.log(end)
    }
  }
}
console.log(findRotatedIndex([11,22,33,1,2,3,4], 2));
