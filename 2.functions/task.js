// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0];
  max = arr[0];
  sum = 0;
  
  for (let i = 0; i < arr.length; i++){
    if (max < arr[i]){
      max = arr[i];
    }


    if (min > arr[i]){
      min = arr[i];
    } 

    sum += arr[i];
  }

  avg = sum / arr.length;
  avg = +avg.toFixed(2);

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }

  return sum;
}


function makeWork(arrOfArr, func) {
  let max = 0;

  for (let i = 0; i < arrOfArr.length; i++){
    if (max < func(arrOfArr[i]) ){
      max = func(arrOfArr[i])
    }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  let max = arr[0];
  let min = arr[0];
  let difference = 0;
 for (let i = 0; i < arr.length; i++){
  if (max < arr[i]){
    max = arr[i];
  }

  if (min > arr[i]){
    min = arr[i];
  }
 }

 difference = max - min;
 difference = Math.abs(difference);
 return difference;
}
