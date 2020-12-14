export function mergeSortMain(array) {
  if (array.length <= 1) return array;
  const arrayCopy = array.slice();
  const animate = [];
  animate.push({ type: "start" });
  mergeSort(array, 0, array.length - 1, arrayCopy, animate);
  animate.push({ type: "finish" });
  let sortedArray = array
  return {
    animate,
    sortedArray
  };
}

function mergeSort(array, start, end, arrayCopy, animate) {
  if (end === start) return;
  const mid = Math.floor((start + end) / 2);
  mergeSort(arrayCopy, start, mid, array, animate);
  mergeSort(arrayCopy, mid + 1, end, array, animate);

  merge(array, start, mid, end, arrayCopy, animate);
}

function merge(array, start, mid, end, arrayCopy, animate) {
  let s = start;
  let main = start;
  let m = mid + 1;

  while (s <= mid && m <= end) {
    animate.push({ id: s, type: "search" });
    animate.push({ id: m, type: "search_2" });
    animate.push({ id: s, type: "unsearch" });
    animate.push({ id: m, type: "unsearch" });
    if (arrayCopy[s] <= arrayCopy[m]) {
      animate.push({ id: main, height: arrayCopy[s], type: "swap" });
      array[main++] = arrayCopy[s++];
    } else {
      animate.push({ id: main, height: arrayCopy[m], type: "swap" });
      array[main++] = arrayCopy[m++];
    }
  }
  while (s <= mid) {
    // animate.push({ id: s, type: "search" });

    animate.push({ id: main, height: arrayCopy[s], type: "swap" });
    // animate.push({ id: s, type: "unsearch" });
    array[main++] = arrayCopy[s++];
  }
  while (m <= end) {
    // animate.push({ id: m, type: "search_2" });
    animate.push({ id: main, height: arrayCopy[m], type: "swap" });
    // animate.push({ id: m, type: "unsearch" });
    array[main++] = arrayCopy[m++];
  }
}
