"use strict";
exports.__esModule = true;
exports.solution = void 0;
function solution(input) {
    var sum = BigInt(0);
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var item = input_1[_i];
        sum += BigInt(item);
    }
    return sum.toString().substring(0, 10);
}
exports.solution = solution;
