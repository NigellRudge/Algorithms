"use strict";
exports.__esModule = true;
exports.solution = void 0;
var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function solution(inputArray, N, sum) {
    var outputArray = [];
    outerLoop: for (var i = 0; i < N; i++) {
        var temp = 0;
        outputArray.push(i + 1);
        innerLoop: for (var j = i; j < N; j++) {
            temp += inputArray[j];
            if (temp > sum) {
                outputArray = [];
                break;
            }
            if (temp == sum) {
                outputArray.push(j + 1);
                return outputArray;
            }
        }
    }
    return [-1];
}
exports.solution = solution;
