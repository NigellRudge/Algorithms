"use strict";
exports.__esModule = true;
exports.BubbleSort = void 0;
var Utils_1 = require("../utils/Utils");
function BubbleSort(inputArray) {
    outerLoop: while (true) {
        for (var i = 0; i < inputArray.length; i++) {
            if (i < inputArray.length - 1) {
                if (inputArray[i] > inputArray[i + 1]) {
                    inputArray = (0, Utils_1.swap)(inputArray, i, (i + 1));
                    continue outerLoop;
                }
            }
        }
        break;
    }
    return inputArray;
}
exports.BubbleSort = BubbleSort;
