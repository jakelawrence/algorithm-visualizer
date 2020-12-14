export function selectionSortMain(array) {
  const arrayCopy = array.slice();
  const animate = [];
  animate.push({ type: "start" });
  selectionSort(arrayCopy, arrayCopy.length, animate);
  animate.push({ type: "finish" });
  let sortedArray = array
  return {
    animate,
    sortedArray
  };
}
function selectionSort(array, n, animate) {
  let i, min_id;
  for (i = 0; i < n - 1; i++) {
    min_id = i;
    animate.push({ id: min_id, type: "search" });
    for (let j = i + 1; j < n; j++) {
      animate.push({ id: j, type: "search_2" });
      if (array[j] < array[min_id]) {
        animate.push({ id: min_id, type: "unsearch" });
        min_id = j;
        animate.push({ id: j, type: "search" });
      } else {
        animate.push({ id: j, type: "unsearch" });
      }
    }
    if (min_id !== i) {
      animate.push({ id: i, height: array[min_id], type: "swap" });
      animate.push({ id: min_id, height: array[i], type: "swap" });
      var swap = array[i];
      array[i] = array[min_id];
      array[min_id] = swap;
    }
    animate.push({ id: min_id, type: "unsearch" });
  }
}
