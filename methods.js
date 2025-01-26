const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function mySlice(arr, start, end) {
  const resArr = [];
  if (start > 0 && !end) {
    for (let i = start; i < arr.length; i++) {
      resArr.push(arr[i]);
    }
    return resArr;
  }

  if (!start && !end) {
    for (let i = 0; i < arr.length; i++) {
      resArr.push(arr[i]);
    }
    return resArr;
  }

  if (start < 0 && !end) {
    for (let i = arr.length - 1; i >= arr.length + start; i--) {
      resArr.push(arr[i]);
    }
  } else {
    for (let i = start; i < end; i++) {
      resArr.push(arr[i]);
    }
  }

  return resArr;
}
// const newArr = mySlice(arr, -4);
// console.log(newArr);

function myIndexOf(arr, item, from = 0) {
  if (from !== 0) {
    for (let i = from; i < arr.length; i++) {
      if (arr[i] === item) return i;
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) return i;
    }
  }

  return -1;
}
// const newArr = myIndexOf(arr, 44);
// console.log(newArr);

function myIncludes(arr, item, from) {
  if (from !== 0) {
    for (let i = from; i < arr.length; i++) {
      if (arr[i] === item) return true;
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) return true;
    }
  }

  return false;
}
// const newArr = myIncludes(arr, -1);
// console.log(newArr);
