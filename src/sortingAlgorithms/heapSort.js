export function heapSortMain(array) {
  const arrayCopy = array.slice();
  const animate = [];
  animate.push({ type: "start" });
  heapSort(arrayCopy, animate);
  animate.push({ type: "finish" });
  let sortedArray = arrayCopy
  return{
    animate,
    sortedArray
  };
}

function heapSort(array, animate) {
  const n = array.length;
  for (let i = Math.floor(n / 2); i >= 0; i--) {
    animate.push({ id: i, type: "search_2" });
    heapify(array, n, i, animate);
    animate.push({ id: i, type: "unsearch" });
  }
  for (let i = n - 1; i > 0; i--) {
    animate.push({ id: 0, height: array[i], type: "swap" });
    animate.push({ id: i, height: array[0], type: "swap" });
    let temp = array[0];
    array[0] = array[i];
    array[i] = temp;
    heapify(array, i, 0, animate);
  }
}

function heapify(array, n, i, animate) {
  let largest = i;

  let l = 2 * i + 1;
  let r = 2 * i + 2;
  if (l < n && array[l] > array[largest]) {
    largest = l;
    animate.push({ id: i, type: "search_2" });
    animate.push({ id: i, type: "unsearch" });
  }
  if (r < n && array[r] > array[largest]) {
    largest = r;
    animate.push({ id: i, type: "search_2" });
    animate.push({ id: i, type: "unsearch" });
  }
  if (largest !== i) {
    animate.push({ id: i, height: array[largest], type: "swap" });
    animate.push({ id: largest, height: array[i], type: "swap" });
    let swap = array[i];
    array[i] = array[largest];
    array[largest] = swap;

    heapify(array, n, largest, animate);
  }
}
