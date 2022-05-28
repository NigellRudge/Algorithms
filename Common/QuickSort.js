"use strict";
exports.__esModule = true;
exports.quicksort = void 0;
function swap(arr, index1, index2) {
    console.log("item 1: ".concat(arr[index1]));
    console.log("item 2: ".concat(arr[index2]));
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    console.log("item 1 after swap: ".concat(arr[index1]));
    console.log("item 2 after swap: ".concat(arr[index2]));
}
function partition(array, low, high) {
    var pivot = array[high];
    var i = low - 1;
    console.log("pivot: ".concat(pivot));
    console.log("i: ".concat(i));
    for (var j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++;
            swap(array, i, j);
        }
    }
    swap(array, i + 1, high);
    return (i + 1);
}
function quicksort(array, low, high) {
    if (low < high) {
        var p = partition(array, low, high);
        quicksort(array, low, p - 1);
        quicksort(array, p + 1, high);
    }
}
exports.quicksort = quicksort;
