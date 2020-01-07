var array = [6,4,7,3,2,1,5]

function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

function bubbleSort(array) {
    var swapped;
    do {
      swapped = false;
      for(var i = 0; i < array.length; i++) {
        if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
          swap(array, i, i + 1);
          swapped = true;
        }
      }
    } while(swapped);
    return array;
  }
  
  console.log(bubbleSort(array.slice()));