"use strict";
exports.__esModule = true;
exports.solution = void 0;
function solution(N, K) {
    var output = 0;
    var powerValue = BigInt(Math.pow(N, K));
    var numberArray = powerValue.toString().split('');
    for (var _i = 0, numberArray_1 = numberArray; _i < numberArray_1.length; _i++) {
        var item = numberArray_1[_i];
        output += parseInt(item);
    }
    return output;
}
exports.solution = solution;
