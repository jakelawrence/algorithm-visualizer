export function quickSortMain(array) {
  const arrayCopy = array.slice();
  const animate = [];
  animate.push({ type: "start" });
  quickSort(arrayCopy, 0, arrayCopy.length - 1, animate);
  animate.push({ type: "finish" });
  let sortedArray = arrayCopy
  return {
    animate,
    sortedArray
  };
  
}

function quickSort(array, low, high, animate) {
  if (low < high) {
    let pi = partition(array, low, high, animate);
    quickSort(array, low, pi - 1, animate);
    quickSort(array, pi + 1, high, animate);
  }
}

function partition(array, low, high, animate) {
  let pivot = array[high];
  animate.push({ id: high, type: "search" });
  //animate.push({ id: high, type: "setPivot" });

  let i = low - 1;
  for (let j = low; j < high; j++) {
    animate.push({ id: j, type: "search_2" });
    //animate.push({ id: j, type: "setSearch" });
    if (array[j] < pivot) {
      i++;

      animate.push({ id: i, height: array[j], type: "swap" });
      animate.push({ id: j, height: array[i], type: "swap" });
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    animate.push({ id: j, type: "unsearch" });
    //animate.push({ id: j, type: "unsetSearch" });
  }

  animate.push({ id: i + 1, height: array[high], type: "swap" });
  animate.push({ id: high, height: array[i + 1], type: "swap" });
  animate.push({ id: high, type: "unsearch" });
  //animate.push({ id: high, type: "unsetPivot" });
  let temp = array[i + 1];
  array[i + 1] = array[high];
  array[high] = temp;

  return i + 1;
}
