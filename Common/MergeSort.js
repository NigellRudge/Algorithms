"use strict";
exports.__esModule = true;
exports.mergeSort = void 0;
function mergeSort(array) {
    if (array.length === 1 || array.length === 0)
        return array;
    var middle = Math.floor(array.length / 2);
    var leftArray = array.slice(0, middle);
    var rightArray = array.slice(middle);
    return merge(mergeSort(leftArray), mergeSort(rightArray));
}
exports.mergeSort = mergeSort;
function merge(leftArray, rightArray) {
    var result = [];
    var indexLeft = 0;
    var indexRight = 0;
    while (indexLeft < leftArray.length && indexRight < rightArray.length) {
        if (leftArray[indexLeft] < rightArray[indexRight]) {
            result.push(leftArray[indexLeft]);
            indexLeft++;
        }
        else {
            result.push(rightArray[indexRight]);
            indexRight++;
        }
    }
    return result.concat(leftArray.slice(indexLeft)).concat(rightArray.slice(indexRight));
}
