"use strict";
exports.__esModule = true;
exports.countDivisors = exports.solution = void 0;
var Utils_1 = require("../utils/Utils");
function solution(N) {
    var maxValue = 0;
    var divisorsCount = 0;
    var index = 1;
    while (divisorsCount <= N) {
        maxValue = (0, Utils_1.triangular)(index);
        divisorsCount = countDivisors(maxValue);
        console.log("number:".concat(maxValue));
        console.log("divisorsCount:".concat(divisorsCount));
        index++;
    }
    return maxValue;
}
exports.solution = solution;
function countDivisors(N) {
    var count = 0;
    for (var i = 1; i <= N; i++) {
        if (N % i == 0)
            count++;
    }
    return count;
}
exports.countDivisors = countDivisors;
