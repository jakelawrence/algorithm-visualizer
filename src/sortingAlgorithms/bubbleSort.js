export function bubbleSortMain(array) {
  const arrayCopy = array.slice();
  const animate = [];
  animate.push({ type: "start" });
  bubbleSort(arrayCopy, animate);
  animate.push({ type: "finish" });
  let sortedArray = arrayCopy
  return{
    animate,
    sortedArray
  };
}

function bubbleSort(array, animate) {
  var n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      animate.push({ id: j, type: "search" });
      animate.push({ id: j + 1, type: "search_2" });
      if (array[j] > array[j + 1]) {
        animate.push({ id: j, height: array[j + 1], type: "swap" });
        animate.push({ id: j + 1, height: array[j], type: "swap" });
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
      animate.push({ id: j, type: "unsearch" });
      animate.push({ id: j + 1, type: "unsearch" });
    }
  }
}
