"use strict";
exports.__esModule = true;
exports.solution = void 0;
function solution(inputArray, N) {
    N = N == null ? inputArray.length : N;
    for (var i = 0; i < N; i++) {
        for (var j = i + 1; j < N; j++) {
            if (inputArray[j] < inputArray[i]) {
                var temp = inputArray[i];
                inputArray[i] = inputArray[j];
                inputArray[j] = temp;
            }
        }
    }
    return inputArray;
}
exports.solution = solution;
