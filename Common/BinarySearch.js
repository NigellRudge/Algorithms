"use strict";
exports.__esModule = true;
exports.BinarySearch = void 0;
function BinarySearch(array, numberToFind) {
    var start = 0;
    var end = array.length - 1;
    while (start <= end) {
        var middle = Math.floor((end + start) / 2);
        if (array[middle] == numberToFind)
            return middle;
        if (array[middle] > numberToFind) {
            end = middle;
        }
        if (array[middle] < numberToFind) {
            start = middle;
        }
    }
}
exports.BinarySearch = BinarySearch;
